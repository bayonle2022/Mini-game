let secretLetter = String.fromCharCode(65 + Math.random() * 10); // A-J
    let chances = 4;

    document.getElementById('guessBtn').addEventListener('click', function () {
      const input = document.getElementById('guessInput');
      const message = document.getElementById('message');
      const replay = document.getElementById('Replay')
      let guess = input.value.toUpperCase();

      if (!guess.match(/^[A-J]$/)) {
        message.textContent = "❗ Enter valid letter A-J.";
        return;
      }

      if (guess === secretLetter) {
        message.textContent = `🎉 Correct! The secret letter was "${secretLetter}".`;
        input.disabled = true;
        this.disabled = true;
      } else {
        chances--;
        if (chances > 0) {
          message.textContent = `❌ Wrong! ${chances} chance(s) left.`;
        } else {
          message.textContent = '💀 Game Over! The secret letter was'+" " +secretLetter;
          input.disabled = true;
          this.disabled = true;
        }
      }

   
    })

    document.getElementById('Replay').addEventListener('click', function () {
        chances = 4;
        secretLetter = String.fromCharCode(65 + Math.random() * 10);
        document.getElementById('guessInput').value = "";
        document.getElementById('guessInput').disabled = false;
        document.getElementById('guessBtn').disabled = false;
        document.getElementById('message').textContent = "";
      });


      document.getElementById('guessBtn').addEventListener('click', function () {
        const input = document.getElementById('guessInput');
        const message2= document.getElementById('message2');
        const replay = document.getElementById('Replay')

    })

    

// const express = require ('express');
// const app = express();

// const bodyParser = require ('body-parser')

// const cors = require ('cors')
