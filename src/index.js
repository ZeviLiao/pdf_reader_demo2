
export default function hello(user = '    World') {
  const u = user.trimStart().trimEnd();
  return `Hello ${u}!\n`;
}

// if (require.main === module) {
//   process.stdout.write(hello());
// }



// 判斷中韓日文
// \u4e00-\u9fa5 (中文)
// \x3130-\x318F (韓文)
// \xAC00-\xD7A3 (韓文)
// \u0800-\u4e00 (日文)
// if (preg_match("/[\u4e00-\u9fa5]/", $str)){
//  echo '是中文';
// }

// 所有中文字	[\u4E00-\u9FFF]
// 全型數字	[\uFF10-\uFF19]
// 全型英文小寫	[\uFF41-\uFF5A]
// 全型英文大寫	[\uFF21-\uFF3A]

let cht = '舊歸,時間，國寶';
let chs = '旧归,时间，国宝';
let kr = '고가,시대 · 국보';
let jp = 'お元気ですか？';
let en = 'how, are; you.$%';
let dg = 'ab,,,,0,';

let str = dg

// let rx = /[\u0800-\u9fff]/ // 中，日
// let ret = str.match(rx)
// console.log(ret !== null)


([\w ]+\s*)(\s*,\s*[\w ]+\s*)*  // 英文。



let rx = /\w+(,\w+)*/ // 中，日
let ret = rx.test(str)
console.log(ret)

// [\u0800-\u9fff]+(\s*,\s*[\u0800-\u9fff]+)*


// [가-힣]+(\s*,\s*[가-힣]+)*
// \w+(,\w+)*
// (\w+)(,\s*\w+)*
// (\w+\s*)(,\s*\w+\s*)*

// rx = /[\x3130-\x318F]/
// ret = str.match(rx)
// console.log(ret)
// rx = /[\xAC00-\xD7A3]/
// ret = str.match(rx)
// console.log(ret)
// rx = /[\u0800-\u4e00]/
// ret = str.match(rx)
// console.log(ret)

/xxxx/g

([\w ]+\s*|[\u0800-\u9fff]+\s*|[가-힣 ]+\s*)(\s*,\s*[\w ]+\s*|\s*,\s*[\u0800-\u9fff]+\s*|\s*,\s*[가-힣 ]+\s*)*

