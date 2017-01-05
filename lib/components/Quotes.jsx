export const Quote = () => {
  const quotesArray = [
    '"Floss a little; invest up in a mutual fund." (Busta Rhymes, “Dangerous”)',
    '"Men lie, women lie, numbers don’t.” (Jay Z, "Reminder")',
    '"Get your money right, be an international player.” (Dr. Dre, “Get Your Money Right")',
    '“Control what I hold and of course be the boss of myself, no-one else will bring my wealth.” (Big Daddy Kane, “A Job Ain’t Nothing But Work”)',
    '“Let’s toast to paid mortgages, lasting marriages.” (Talib Kweli, “Art Imitates Life.")',
    '“Never loan somebody what you need right back.” (Drake, “All Me”)',
    '“Invest in your future, don’t dilute your finances, 401k, make sure it’s low risk, then get some real estate, 4.25% thirty-year mortgage.” (Kendrick Lamar, "YOLO")',
    '"We dont lease we buy the whole car. (Jay Z, Can I Live)"',
    '"Diversify your millions, you can live off the interest / Make every revenue stream flood, see where it took me." (Xzibit, "Everything")',
    '"Id be lying if I said I didnt want millions / More than money saved, I wanna save children." (Common, "The 6th Sense")',
  ];
  const randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
};
