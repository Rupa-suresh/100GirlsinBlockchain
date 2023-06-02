function Anagrams(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
    if (str1.length !== str2.length) {
      return false;
    }
    var sortedStr1 = str1.split('').sort().join('');
    var sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
 }
  var string1 = "Study";
  var string2 = "Dusty";
  var result = Anagrams(string1, string2);
  console.log(result);
  