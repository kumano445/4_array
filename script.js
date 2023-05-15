 // 1
  var sweet = ["クッキー", "ケーキ", "まんじゅう", "チョコ"];
  console.log(sweet[1]);
  console.log(sweet[3]);

  // 2
  // key:プロパティ内に記載されている名前。例)name = "太郎"　nameがkeyにあたる。

  // value：プロパティ内にある値。例)name = "太郎"　"太郎"がvelueにあたる。

  // プロパティ：複数のデータについて扱う方法として配列があるが、JavaScriptには複数のデータの集合を扱う別の方法がありそのことをオブジェクトという。プロパティはオブジェクトの状態を確認するために用いられる。プロパティ名をkey、値をvalueという。例)オブジェクト：「人」、「人」の状態を知るための「名前」「性別」「年齢」といった情報をプロパティという。
  
  // 3
    var sweet = ["クッキー", "ケーキ", "まんじゅう"];
    console.log(sweet);  
    
    // 4
    var teachers = [
      {
      name: "太郎",
      age: 25,
      subject: "国語",
      },
      {
      name: "浩司",
      age: 30,
      subject: "数学",
      },
      {
      name: "花子",
      age: 26,
      subject: "社会",
      },
      {
      name: "洋子",
      age: 40,
      subject: "理科",
      }
    ]      

    console.log(teachers[0]);
    console.log(teachers[3]);
    console.log(teachers[0].age);
    console.log(teachers[3].subject);