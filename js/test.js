// $ ←これがjQueryになります！🤗
// ボタンを押すとAさんとBさんのジャンケンが作られる

console.log("ジャンケン作る");

$("button").on("click", function () {

    // Aさんのジャンケン
    console.log("Aさんのジャンケン");

    var num = Math.floor(Math.random() * 3);
    console.log(num, "numにて箱の中身を指定");

    if (num === 0) {
        var a_san = "グー";//値を代入
        $('#Asan_p').html(a_san);
        $('#A_randomShow').attr('src', "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s220/janken_gu.png");
    } else if (num === 1) {
        var a_san = "チョキ";//値を代入
        $('#Asan_p').html(a_san);
        $('#A_randomShow').attr('src', "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSYYvy3_ZU5FYb8Jug1Gssh483SEIn8hSwWO33rp-7j9m5AFsn9Fyis9oT1DKvykpCEMV6bJGMAaTtABep-1qqr9ZPtiI_aQQsJVWNL6H_i-b6I3O_1-dgwmavPoEI9HHMsuHHPQCHj90/s270/janken_choki.png");
    } else if (num === 2) {
        var a_san = "パー";//値を代入
        $('#Asan_p').html(a_san);
        $('#A_randomShow').attr('src', "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQhsfUvWhhVJej7FEqYsQbe0EwLCOHYxKU4KnrF026nnfJkiM3yQO2NFmnnX0nD4P2IdCmg8qFQpZMW8vtbs-K7sLpoCqXwO0fkTT7UL5VkM-E2MOUNXpikYfspDKaxidAehqcuQoIrcM/s290/janken_pa.png");
    }
    // Bさんのジャンケン
    console.log("Bさんのジャンケン");

    var num = Math.floor(Math.random() * 3);
    console.log(num, "numにて箱の中身を指定");

    if (num === 0) {
        var b_san = "グー";//値を代入
        $('#Bsan_p').html(b_san);
        $('#B_randomShow').attr('src', "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s220/janken_gu.png");
    } else if (num === 1) {
        var b_san = "チョキ";//値を代入
        $('#Bsan_p').html(b_san);
        $('#B_randomShow').attr('src', "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSYYvy3_ZU5FYb8Jug1Gssh483SEIn8hSwWO33rp-7j9m5AFsn9Fyis9oT1DKvykpCEMV6bJGMAaTtABep-1qqr9ZPtiI_aQQsJVWNL6H_i-b6I3O_1-dgwmavPoEI9HHMsuHHPQCHj90/s270/janken_choki.png");
    } else if (num === 2) {
        var b_san = "パー";//値を代入
        $('#Bsan_p').html(b_san);
        $('#B_randomShow').attr('src', "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQhsfUvWhhVJej7FEqYsQbe0EwLCOHYxKU4KnrF026nnfJkiM3yQO2NFmnnX0nD4P2IdCmg8qFQpZMW8vtbs-K7sLpoCqXwO0fkTT7UL5VkM-E2MOUNXpikYfspDKaxidAehqcuQoIrcM/s290/janken_pa.png");
    }

    if (a_san === "グー" && b_san === "チョキ" || a_san === "チョキ" && b_san === "パー" || a_san === "パー" && b_san === "グー") {
        console.log("Aさんの勝ち");
        $('#hantei').html("Aさんの勝ち");
    } else if (a_san === "チョキ" && b_san === "グー" || a_san === "パー" && b_san === "チョキ" || a_san === "グー" && b_san === "パー") {
        console.log("Bさんの勝ち");
        $('#hantei').html("Bさんの勝ち");
    } else if (a_san === "グー" && b_san === "グー" || a_san === "チョキ" && b_san === "チョキ" || a_san === "パー" && b_san === "パー") {
        console.log("あいこ");
        $('#hantei').html("あいこだよ。もう一度遊んでね。");

        // この下は消さない🤗
    }
});

console.log("ジャンケン作る");




// 勝ち負け表示、場合分け
// console.log("勝ち負け判定する");
// if (a_san === "グー" && b_san === "チョキ") {
//     $('#hantei').html("Aさんの勝ち");
//     } else if (a_san === "チョキ" && b_san === "パー") {
//     $('#hantei').html("Aさんの勝ち");
//     } else if (a_san === "パー" && b_san === "チョキ") {
//     $('#hantei').html("Aさんの勝ち");
        // この下は消さない🤗
// }
// $("button").on("click", function () {

//     // Aさんのジャンケン
//     var num = Math.floor(Math.random() * 3);
//     console.log(num, "箱の中身、＋１をしています");

//     if (num === 0) {
//         console.log("大吉");
//         $("h2").html("大吉");
//         $("h2").css("color", "red");
//         $("h1").css("color", "red");
//         $('#randomShow').attr('src', "./img/about_01.jpg");
//         $('a#download_btn').attr('href', "./img/about_01.jpg");
//     } else if (num === 1) {
//         console.log("中吉");
//         $("h2").html("中吉");
//         $("h2").css("color", "yellow");
//         $('#randomShow').attr('src', "./img/about_02.jpg");
//         $('a#download_btn').attr('href', "./img/about_02.jpg");
//     } else if (num === 2) {
//         console.log("小吉");
//         $("h2").html("小吉");
//         $("h2").css("color", "blue");
//         $('#randomShow').attr('src', "./img/about_03.jpg");
//         $('a#download_btn').attr('href', "./img/about_03.jpg");
//     }
//     // Bさんのジャンケン

//     // この下は消さない🤗
// });

// $(function () {
//     $('a#download_btn').on('click', function (e) {
//         var href_url = $(this).attr('href');
//         var href_name = $(this).attr('href').replace(/\\/g, '/').replace(/.*\//, '');
//         $(e.target).attr({
//             download: href_name,
//             href: href_url
//         });
//     });
// });
