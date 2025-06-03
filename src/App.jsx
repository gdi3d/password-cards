import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "./LanguageContext";

function generatePassword(length, type = "basic") {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%&*";
  const specials = "()_+{}|:<>?~-=[]\\;',./";
  const minLength = 8;

  let requiredSets;
  let allChars;

  if (type === "numbers") {
    requiredSets = [numbers];
    allChars = numbers;
  } else {
    requiredSets = [lowercase, uppercase, numbers];
    allChars = lowercase + uppercase + numbers;

    if (type === "extended") {
      requiredSets.push(symbols);
      allChars += symbols;
    }

    if (type === "full") {
      requiredSets.push(specials);
      allChars += specials;
    }
  }
 
  if(length < minLength ){
    length = minLength;
  }

  let passwordChars = [];

  // Ensure one char from each required set
  for (const set of requiredSets) {
    let char;
    do {
      char = set.charAt(Math.floor(Math.random() * set.length));
    } while (passwordChars.length && passwordChars[passwordChars.length - 1] === char);
    passwordChars.push(char);
  }

  // Fill remaining characters
  while (passwordChars.length < length) {
    let char;
    let attempts = 0;
    do {
      char = allChars.charAt(Math.floor(Math.random() * allChars.length));
      attempts++;
      // avoid infinite loops if charset is small
      if (attempts > 10) break;
    } while (passwordChars[passwordChars.length - 1] === char);
    passwordChars.push(char);
  }

  // Shuffle to randomize required character positions
  for (let i = passwordChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]];
  }

  // Final pass to check for adjacent duplicates after shuffle
  for (let i = 1; i < passwordChars.length; i++) {
    if (passwordChars[i] === passwordChars[i - 1]) {
      // Replace with different random char
      const alternatives = allChars.split("").filter(c => c !== passwordChars[i]);
      passwordChars[i] = alternatives[Math.floor(Math.random() * alternatives.length)];
    }
  }
  return passwordChars.join('');
}

function generateRows(rowCount, passwordLength) {
  return Array.from({ length: rowCount }, () => ({
    app: "",
    username: "",
    numbers: generatePassword(passwordLength, "numbers"),
    basic: generatePassword(passwordLength, "basic"),
    extended: generatePassword(passwordLength, "extended"),
    full: generatePassword(passwordLength, "full")
  }));
}

function PasswordCell({ password }) {
  return (
    <div className="font-mono text-xs mt-2">
      <div className="flex justify-end gap-4 mr-5">
        {password.split("").map((char, i) => (
          <div key={i} className="flex flex-col items-center w-[2ch]">
            <span className="text-[23px] pb-3">{char}</span>
            <span className="text-[14px] text-gray-400">{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function IntroCard() {
  const { t } = useTranslation();

  return (
    <div className="mb-4 no-print">
      <div className="border rounded-lg shadow p-4 bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">ℹ️ {t.introTitle || "How to use this app"}</h2>
        </div>
          <p className="mt-2 text-gray-700 whitespace-pre-line">{t.intro}</p>
      </div>
    </div>
  );
}
export default function PasswordBook() {
  const [count, setCount] = useState(10);
  const [length, setLength] = useState(12);
  const [rows, setRows] = useState(() => generateRows(10, 12));
  const { t, lang, setLang } = useTranslation();
  
  useEffect(() => {
    setRows(generateRows(count, length));
  }, [count, length]);

  const handlePrint = () => {
    window.print();
  };

    return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{t.title}</h1>
      <IntroCard />

      <div className="flex flex-wrap gap-4 mb-4 no-print">
        <label>
      {t.numberOfRows}:
          <input
            type="number"
            min="10"
            max="30"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="ml-2 border rounded p-1"
          />
        </label>
        <label>
        {t.passwordLength}:
          <input
            type="number"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="ml-2 border rounded p-1"
          />
        </label>
        <Button onClick={() => setRows(generateRows(count, length))}>{t.generateSheet}</Button>
        <Button onClick={handlePrint}>{t.print}</Button>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
     

  <div className="grid gap-6">
    {rows.map((row, index) => (
    <div key={index} className="border rounded-2xl p-4 text-sm text-xl avoid-break">
    <div className="top-2 right-4 text-xs text-gray-500">{t.cardLabel} #{index + 1}</div>
      <div className="flex mb-4 h-10">
        <span className="w-48 font-bold">{t.appOrWebsite}</span>
        <span className="flex-1 border-b border-black ml-5"> </span>
      </div>
      <div className="flex mb-4 h-10">
        <span className="w-48 font-bold">{t.usernameOrEmail}</span>
        <span className="flex-1 border-b border-black ml-5"> </span>
      </div>
      <h4>{t.passOptionsLabel}</h4>
      <hr/>
      <div className="mb-2 items-center text-left border-b border-black">
        <span className="font-bold">{t.passNumbers}</span> <span className="text-sm">{t.passNumbersDescription}</span>
        <PasswordCell password={row.numbers} />
      </div>
      <div className="mb-2 items-center text-left border-b border-black">
        <span className="font-bold">{t.passBasic}</span> <span className="text-sm">{t.passBasicDescription}</span>
        <PasswordCell password={row.basic} />
      </div>
      <div className="mb-2 items-center border-b border-black">
        <span className="font-bold">{t.passExtended}</span> <span className="text-sm">{t.passExtendedDescription}</span>
        <PasswordCell password={row.extended} />
      </div>
      <div className="mb-2 items-center border-b border-black">
        <span className="font-bold">{t.passFull}</span> <span className="text-sm">{t.passFullDescription}</span>
        <PasswordCell password={row.full} />
      </div>
    </div>
  ))}
  </div>
  <footer className="print-footer print:block hidden">
    <p className="text-center text-xs text-gray-700">
      {t.footerDisclaimer}
    </p>
    <p className="text-center text-lg text-gray-700 upper font-bold">{t.footerNoShare}</p>
  </footer>

</div>
  );
}
