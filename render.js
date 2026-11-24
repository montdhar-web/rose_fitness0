<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>حجرة ورقة مقص</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #12141a;
      color: #f4f6fb;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
    }
    .box {
      background: #1c202b;
      padding: 28px;
      border-radius: 16px;
      width: 100%;
      max-width: 420px;
      text-align: center;
      box-shadow: 0 12px 30px rgba(0,0,0,0.35);
    }
    .score {
      display: flex;
      justify-content: space-around;
      margin: 18px 0;
      font-size: 1.1rem;
      background: #262b3a;
      padding: 12px;
      border-radius: 12px;
    }
    .choices button {
      font-size: 1.1rem;
      padding: 12px 18px;
      margin: 6px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      background: #3b82f6;
      color: #fff;
      transition: transform 0.12s ease, opacity 0.12s ease;
    }
    .choices button:hover {
      transform: translateY(-2px);
      opacity: 0.92;
    }
    #result {
      margin-top: 20px;
      font-size: 1.15rem;
      min-height: 56px;
      line-height: 1.6;
    }
    .reset {
      margin-top: 12px;
      background: transparent;
      border: 1px solid #4b5563;
      color: #cbd5e1;
      padding: 8px 14px;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="box">
    <h2>حجرة · ورقة · مقص</h2>

    <div class="score">
      <div>أنت: <span id="playerScore">0</span></div>
      <div>الخصم: <span id="aiScore">0</span></div>
    </div>

    <div class="choices">
      <button onclick="play('حجرة')">🪨 حجرة</button>
      <button onclick="play('ورقة')">📄 ورقة</button>
      <button onclick="play('مقص')">✂️ مقص</button>
    </div>

    <div id="result">اختر حركتك لبدء الجولة</div>
    <button class="reset" onclick="resetGame()">تصفير النقاط</button>
  </div>

  <script>
    const options = ["حجرة", "ورقة", "مقص"];
    let playerScore = 0;
    let aiScore = 0;

    function play(playerChoice) {
      const aiChoice = options[Math.floor(Math.random() * options.length)];
      let outcome = "";

      if (playerChoice === aiChoice) {
        outcome = "تعادل!";
      } else if (
        (playerChoice === "حجرة" && aiChoice === "مقص") ||
        (playerChoice === "مقص" && aiChoice === "ورقة") ||
        (playerChoice === "ورقة" && aiChoice === "حجرة")
      ) {
        playerScore++;
        outcome = "أنت الفائز في هذه الجولة!";
      } else {
        aiScore++;
        outcome = "الخصم فاز بهذه الجولة!";
      }

      document.getElementById("playerScore").textContent = playerScore;
      document.getElementById("aiScore").textContent = aiScore;
      document.getElementById("result").innerHTML =
        `اختيارك: <b>${playerChoice}</b> | اختيار الخصم: <b>${aiChoice}</b><br><b>${outcome}</b>`;
    }

    function resetGame() {
      playerScore = 0;
      aiScore = 0;
      document.getElementById("playerScore").textContent = 0;
      document.getElementById("aiScore").textContent = 0;
      document.getElementById("result").textContent = "تم تصفير النقاط. اختر حركتك!";
    }
  </script>
</body>
</html>
