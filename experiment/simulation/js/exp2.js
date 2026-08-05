// Guard against iframe resizer conflicts
if (typeof window.sendPostMessage !== "undefined") {
  // If sendPostMessage already exists, avoid redeclaration
  console.log("sendPostMessage already defined, skipping redeclaration");
}

function Mono_Encrypt() {
  plaintext = document.getElementById("p").value.toLowerCase();
  key = document
    .getElementById("key")
    .value.toLowerCase()
    .replace(/[^a-z]/g, "");
  if (plaintext.length < 1) {
    alert("Please enter some plaintext (letters and numbers only)");
    return;
  }
  if (key.length != 26) {
    alert(
      "Key must be 26 characters in length. Current length: " +
        key.length +
        ". Hint: The key should be a permutation of 'abcdefghijklmnopqrstuvwxyz'",
    );
    return;
  }

  // Check for duplicate characters in key
  var keyChars = key.split("");
  var uniqueChars = [...new Set(keyChars)];
  if (uniqueChars.length !== 26) {
    alert(
      "Key contains duplicate characters. Each letter a-z must appear exactly once.",
    );
    return;
  }

  ciphertext = "";
  var re = /[a-z]/;
  for (i = 0; i < plaintext.length; i++) {
    if (re.test(plaintext.charAt(i)))
      ciphertext += key.charAt(plaintext.charCodeAt(i) - 97);
    else ciphertext += plaintext.charAt(i);
  }
  if (document.getElementById("punc").checked)
    document.getElementById("c").value = ciphertext
      .replace(/[^a-z]/g, "")
      .replace(/([a-z]{5})/g, "$1 ");
  else document.getElementById("c").value = ciphertext;
}

function Mono_Decrypt(f) {
  ciphertext = document.getElementById("c").value.toLowerCase();
  key = document
    .getElementById("key")
    .value.toLowerCase()
    .replace(/[^a-z]/g, "");
  if (ciphertext.length < 1) {
    alert("Please enter some ciphertext (letters only)");
    return;
  }
  if (key.length != 26) {
    alert(
      "Key must be 26 characters in length. Current length: " +
        key.length +
        ". Hint: Use the 'Generate Random Key' button or ensure your key contains all letters a-z exactly once.",
    );
    return;
  }

  // Check for duplicate characters in key
  var keyChars = key.split("");
  var uniqueChars = [...new Set(keyChars)];
  if (uniqueChars.length !== 26) {
    alert(
      "Key contains duplicate characters. Each letter a-z must appear exactly once.",
    );
    return;
  }

  plaintext = "";
  var re = /[a-z]/;
  for (i = 0; i < ciphertext.length; i++) {
    if (re.test(ciphertext.charAt(i)))
      plaintext += String.fromCharCode(key.indexOf(ciphertext.charAt(i)) + 97);
    else plaintext += ciphertext.charAt(i);
  }
  document.getElementById("p").value = plaintext;
}

function Mono_GenRandKey() {
  var keychars = "abcdefghijklmnopqrstuvwxyz";
  var chars = keychars.split("");
  ret = "";
  lim = chars.length;
  for (i = 0; i < lim; i++) {
    index = Math.floor(chars.length * Math.random());
    ret += chars[index];
    chars.splice(index, 1);
  }
  document.getElementById("key").value = ret;
}

var ciphers = [
  "dkxyvrh 1 - qegt vkr hxccwv keur: xuwdr wn cehrq nwvvwtp et vkr hwsrhcxto gwvk krh nwnvrh, gkrt nkr tevwdrn x vxuowtp, duevkrq gkwvr hxccwv gwvk x yedorv gxvdk hit yxnv. nkr leuuegn wv qegt x hxccwv keur gkrt niqqrtub nkr lxuun x uetp gxb ve x dihwein kxuu gwvk fxtb uedorq qeehn el xuu nwmrn. nkr lwtqn x nfxuu orb ve x qeeh vee nfxuu leh krh ve lwv, civ vkheipk gkwdk nkr nrrn xt xvvhxdvwsr pxhqrt. nkr vkrt qwndesrhn x cevvur uxcruurq 'qhwto fr', vkr detvrtvn el gkwdk dxinr krh ve nkhwto vee nfxuu ve hrxdk vkr orb. x dxor gwvk 'rxv fr' et wv dxinrn krh ve pheg ve nidk x vhrfrtqein nwmr krh krxq kwvn vkr drwuwtp.",
  "awbix ildxz kolf a dkzeplld afu zbjjbfm lf bj bz a rwkx iajxpobwwap zdlgbfm a ellgae. jex iajxpobwwap ykxzjblfz awbix afu zex audbjz jl exp ikppxfj buxfjbjt ipbzbz, ildolkfuxu rt exp bfarbwbjt jl pxdxdrxp a olxd. rxnlpx ipahwbfm ahat, jex iajxpobwwap jxwwz awbix jeaj lfx zbux ln jex dkzeplld hbww dagx exp jawwxp afu jex ljexp zbux hbww dagx exp zelpjxp. zex rpxagz lnn jhl obxixz npld jex dkzeplld. lfx zbux dagxz exp zepbfg zdawwxp jeaf xcxp, hebwx afljexp iakzxz exp fxig jl mplh ebme bfjl jex jpxxz, hexpx a obmxlf dbzjagxz exp nlp a zxpoxfj. hbje zldx xnnlpj, awbix rpbfmz expzxwn raig jl exp kzkaw exbmej. zex zjkdrwxz kolf a zdaww xzjajx afu kzxz jex dkzeplld jl pxaie a dlpx aooplopbajx exbmej.",
];
var solution_plaintext = [
  "Chapter 1 - Down the Rabbit Hole: Alice is bored sitting on the riverbank with her sister, when she notices a talking, clothed White Rabbit with a pocket watch run past. She follows it down a rabbit hole when suddenly she falls a long way to a curious hall with many locked doors of all sizes. She finds a small key to a door too small for her to fit, but through which she sees an attractive garden. She then discovers a bottle labelled 'DRINK ME', the contents of which cause her to shrink too small to reach the key. A cake with 'EAT ME' on it causes her to grow to such a tremendous size her head hits the ceiling.",
  "Alice comes upon a mushroom and sitting on it is a blue Caterpillar smoking a hookah. The Caterpillar questions Alice and she admits to her current identity crisis, compounded by her inability to remember a poem. Before crawling away, the caterpillar tells Alice that one side of the mushroom will make her taller and the other side will make her shorter. She breaks off two pieces from the mushroom. One side makes her shrink smaller than ever, while another causes her neck to grow high into the trees, where a pigeon mistakes her for a serpent. With some effort, Alice brings herself back to her usual height. She stumbles upon a small estate and uses the mushroom to reach a more appropriate height.",
];
var keys = ["xcdqrlpkwzoufteyahnvisgjbm", "ariuxnmebsgwdfloypzjkchvtq"];
var current_cipher = 0; // Initialize to 0 instead of -1

// Initialize the first ciphertext when page loads
window.onload = function () {
  document.getElementById("textarea").value =
    ciphers[current_cipher].toLowerCase();
  document.getElementById("textarea2").value =
    ciphers[current_cipher].toLowerCase();

  // Reset all input fields to default values
  document.getElementById("char1").value = "";
  document.getElementById("char2").value = "";
  var char3 = document.getElementById("char3");
  var char4 = document.getElementById("char4");
  if (char3) char3.value = "";
  if (char4) char4.value = "";

  document.getElementById("textarea3").value = "";
  document.getElementById("key2").value = "";

  // Clear replacement history
  document.getElementById("replacements").innerHTML = "";

  // Set default notification
  var notification = document.getElementById("notification");
  if (notification) {
    notification.innerHTML = "Feedback will appear here...";
    notification.style.color = "black";
    notification.style.backgroundColor = "#f8f9fa";
    notification.style.border = "1px solid #dee2e6";
  }
};

function Next_Mono_Test() {
  current_cipher = current_cipher + 1;
  if (current_cipher > ciphers.length - 1) {
    current_cipher = 0;
  }
  document.getElementById("textarea").value =
    ciphers[current_cipher].toLowerCase();
  // Also update the scratchpad with new ciphertext
  document.getElementById("textarea2").value =
    ciphers[current_cipher].toLowerCase();

  // Reset all input fields to default values
  document.getElementById("char1").value = "";
  document.getElementById("char2").value = "";
  var char3 = document.getElementById("char3");
  var char4 = document.getElementById("char4");
  if (char3) char3.value = "";
  if (char4) char4.value = "";

  document.getElementById("textarea3").value = "";
  document.getElementById("key2").value = "";

  // Clear replacement history when switching to new ciphertext
  document.getElementById("replacements").innerHTML = "";

  // Clear notification
  var notification = document.getElementById("notification");
  if (notification) {
    notification.innerHTML = "Feedback will appear here...";
    notification.style.color = "black";
    notification.style.backgroundColor = "#f8f9fa";
    notification.style.border = "1px solid #dee2e6";
  }
}

function CalculateFreq() {
  var cipherText = document.getElementById("textarea").value.toLowerCase();
  var freq = new Array(26);
  for (var i = 0; i < 26; i++) {
    freq[i] = 0;
  }
  var astring = "a";
  var charValOfA = astring.charCodeAt(0);
  for (var i = 0; i < cipherText.length; i++) {
    var index = cipherText.charCodeAt(i) - charValOfA;
    if (index >= 0 && index <= 25) {
      freq[index]++;
    }
  }
  var totalChars = 0;
  for (var i = 0; i < 26; i++) {
    totalChars += freq[i];
  }

  // Generate table with same styling as the reference frequency table
  var output = '<div class="frequency-table-container">';
  output += '<table class="frequency-table">';
  output += "<tbody>";

  // First row: letters a-m
  output += "<tr>";
  for (var i = 0; i < 13; i++) {
    output += "<td><b>" + String.fromCharCode(i + charValOfA) + "</b></td>";
  }
  output += "</tr>";

  // Second row: frequencies for a-m
  output += "<tr>";
  for (var i = 0; i < 13; i++) {
    var num = totalChars > 0 ? freq[i] / totalChars : 0;
    var percentage = Math.round(num * 100000) / 1000;
    if (percentage === 0) {
      percentage = "0.000";
    }
    output += "<td>" + percentage + "</td>";
  }
  output += "</tr>";

  // Third row: letters n-z
  output += "<tr>";
  for (var i = 13; i < 26; i++) {
    output += "<td><b>" + String.fromCharCode(i + charValOfA) + "</b></td>";
  }
  output += "</tr>";

  // Fourth row: frequencies for n-z
  output += "<tr>";
  for (var i = 13; i < 26; i++) {
    var num = totalChars > 0 ? freq[i] / totalChars : 0;
    var percentage = Math.round(num * 100000) / 1000;
    if (percentage === 0) {
      percentage = "0.000";
    }
    output += "<td>" + percentage + "</td>";
  }
  output += "</tr>";

  output += "</tbody>";
  output += "</table>";
  output += "</div>";

  document.getElementById("cipherFreq").innerHTML = output;
}

function Reset() {
  try {
    // Copy current ciphertext to scratchpad
    var textarea = document.getElementById("textarea");
    var textarea2 = document.getElementById("textarea2");
    if (textarea && textarea2) {
      textarea2.value = textarea.value;
    }

    // Clear replacement history
    var replacements = document.getElementById("replacements");
    if (replacements) {
      replacements.innerHTML = "";
    }

    // Clear solution fields
    var textarea3 = document.getElementById("textarea3");
    var key2 = document.getElementById("key2");
    if (textarea3) textarea3.value = "";
    if (key2) key2.value = "";

    // Clear notification
    var notification = document.getElementById("notification");
    if (notification) {
      notification.innerHTML = "Feedback will appear here...";
      notification.style.color = "black";
      notification.style.backgroundColor = "#f8f9fa";
      notification.style.border = "1px solid #dee2e6";
    }

    // Clear character input fields
    var char1 = document.getElementById("char1");
    var char2 = document.getElementById("char2");
    var char3 = document.getElementById("char3");
    var char4 = document.getElementById("char4");
    if (char1) char1.value = "";
    if (char2) char2.value = "";
    if (char3) char3.value = "";
    if (char4) char4.value = "";
  } catch (error) {
    console.error("Error in Reset function:", error);
  }
}

// New function to copy from scratchpad to solution area
function copyFromScratchpad() {
  var scratchpadText = document.getElementById("textarea2").value;
  document.getElementById("textarea3").value = scratchpadText;
}

function ModifyUserText() {
  var userText = document.getElementById("textarea2").value;
  var initRaw = document.getElementById("char1").value.trim();
  var finalRaw = document.getElementById("char2").value.trim();

  if (initRaw === "" || finalRaw === "") {
    alert("Please enter both cipher text and plaintext");
    return;
  }

  // Accept case-insensitive user input, but enforce single alphabet letters.
  if (!/^[a-zA-Z]$/.test(initRaw) || !/^[a-zA-Z]$/.test(finalRaw)) {
    alert("Please enter exactly one alphabet character in each field");
    return;
  }

  var initText = initRaw.toLowerCase();
  var finalText = finalRaw.toUpperCase();

  // Replace only unresolved lowercase ciphertext, never solved uppercase text.
  var output = userText;
  var regex = new RegExp(initText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
  output = output.replace(regex, finalText);

  var replacement_notification =
    "You replaced " + initText + " by " + finalText + "<br>";
  document.getElementById("replacements").innerHTML += replacement_notification;
  document.getElementById("textarea2").value = output;

  // Clear the input fields for next replacement
  document.getElementById("char1").value = "";
  document.getElementById("char2").value = "";
}

function ModifyUserText2() {
  var userText = document.getElementById("textarea2").value;
  var initText = document.getElementById("char3").value;
  var finalText = document.getElementById("char4").value;

  if (initText === "" || finalText === "") {
    alert("Please enter both texts to replace");
    return;
  }

  // Replace all occurrences of initText with finalText
  var output = userText;
  var regex = new RegExp(initText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
  output = output.replace(regex, finalText);

  var replacement_notification =
    "You swapped " + initText + " ↔ " + finalText + "<br>";
  document.getElementById("replacements").innerHTML += replacement_notification;
  document.getElementById("textarea2").value = output;

  // Clear the input fields for next replacement
  document.getElementById("char3").value = "";
  document.getElementById("char4").value = "";
}

// Function to derive substitution key from replacements made
function deriveKeyFromReplacements() {
  var key = "abcdefghijklmnopqrstuvwxyz"; // default mapping
  var keyArray = key.split("");

  // Parse replacement history to build key
  var replacements = document.getElementById("replacements").innerHTML;
  var lines = replacements.split("<br>");

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.includes("You replaced")) {
      var parts = line.match(/You replaced (\w) by (\w)/);
      if (parts && parts.length === 3) {
        var cipherChar = parts[1].toLowerCase();
        var plainChar = parts[2].toLowerCase();
        var cipherIndex = cipherChar.charCodeAt(0) - 97;
        if (cipherIndex >= 0 && cipherIndex < 26) {
          keyArray[plainChar.charCodeAt(0) - 97] = cipherChar;
        }
      }
    }
  }

  return keyArray.join("");
}

function checkAnswer() {
  // Validate that we have a valid cipher loaded
  if (current_cipher < 0 || current_cipher >= solution_plaintext.length) {
    document.getElementById("notification").innerHTML =
      "⚠️ Please load a ciphertext first by clicking 'Next Ciphertext'";
    document.getElementById("notification").style.backgroundColor = "#fff3cd";
    document.getElementById("notification").style.color = "#856404";
    document.getElementById("notification").style.border = "1px solid #ffeaa7";
    return;
  }

  var userPlaintext = document.getElementById("textarea3").value.trim();
  var userKey = document.getElementById("key2").value.trim();

  // Check if user has entered both plaintext and key
  if (userPlaintext === "") {
    document.getElementById("notification").innerHTML =
      "⚠️ Please enter your solution plaintext";
    document.getElementById("notification").style.backgroundColor = "#fff3cd";
    document.getElementById("notification").style.color = "#856404";
    document.getElementById("notification").style.border = "1px solid #ffeaa7";
    return;
  }

  if (userKey === "") {
    document.getElementById("notification").innerHTML =
      "⚠️ Please enter your solution key (26 characters)";
    document.getElementById("notification").style.backgroundColor = "#fff3cd";
    document.getElementById("notification").style.color = "#856404";
    document.getElementById("notification").style.border = "1px solid #ffeaa7";
    return;
  }

  // Validate key length
  if (userKey.length !== 26) {
    document.getElementById("notification").innerHTML =
      "❌ Solution key must be exactly 26 characters long. Current length: " +
      userKey.length;
    document.getElementById("notification").style.backgroundColor = "#f8d7da";
    document.getElementById("notification").style.color = "#721c24";
    document.getElementById("notification").style.border = "1px solid #f5c6cb";
    return;
  }

  // Check if key contains all unique letters a-z
  var keyLower = userKey.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var uniqueChars = [];
  for (var i = 0; i < 26; i++) {
    var char = alphabet.charAt(i);
    if (keyLower.indexOf(char) === -1) {
      document.getElementById("notification").innerHTML =
        "❌ Key must contain all letters a-z exactly once. Missing: " + char;
      document.getElementById("notification").style.backgroundColor = "#f8d7da";
      document.getElementById("notification").style.color = "#721c24";
      document.getElementById("notification").style.border =
        "1px solid #f5c6cb";
      return;
    }
    if (uniqueChars.indexOf(keyLower.charAt(i)) !== -1) {
      document.getElementById("notification").innerHTML =
        "❌ Key contains duplicate letters. Each letter a-z must appear exactly once.";
      document.getElementById("notification").style.backgroundColor = "#f8d7da";
      document.getElementById("notification").style.color = "#721c24";
      document.getElementById("notification").style.border =
        "1px solid #f5c6cb";
      return;
    }
    uniqueChars.push(keyLower.charAt(i));
  }

  // Compare solutions (case-insensitive)
  var correctPlaintext = solution_plaintext[current_cipher].toLowerCase();
  var correctKey = keys[current_cipher].toLowerCase();

  if (
    userPlaintext.toLowerCase() === correctPlaintext &&
    keyLower === correctKey
  ) {
    document.getElementById("notification").innerHTML =
      "🎉 CORRECT!! Well done!<br><strong>Plaintext:</strong> " +
      correctPlaintext +
      "<br><strong>Key:</strong> " +
      correctKey;
    document.getElementById("notification").style.backgroundColor = "#d4edda";
    document.getElementById("notification").style.color = "#155724";
    document.getElementById("notification").style.border = "1px solid #c3e6cb";
  } else {
    var feedback = "❌ Not quite right.<br>";
    if (userPlaintext.toLowerCase() !== correctPlaintext) {
      feedback += "<strong>Plaintext issue:</strong> ";
      // Give specific hints
      var plaintextWords = correctPlaintext.split(" ");
      feedback +=
        "The text starts with '" +
        plaintextWords[0] +
        "' and contains " +
        plaintextWords.length +
        " words.<br>";
    }
    if (keyLower !== correctKey) {
      feedback += "<strong>Key issue:</strong> ";
      // Give frequency hint
      feedback +=
        "The most frequent letter in the ciphertext should map to 'e'.<br>";
    }
    feedback +=
      "💡 <strong>Tip:</strong> Use frequency analysis to help identify letter patterns.<br>";
    feedback += "<strong>Expected Output:</strong><br>";
    feedback += "<strong>Plaintext:</strong> " + correctPlaintext + "<br>";
    feedback += "<strong>Key:</strong> " + correctKey;
    document.getElementById("notification").innerHTML = feedback;
    document.getElementById("notification").style.backgroundColor = "#f8d7da";
    document.getElementById("notification").style.color = "#721c24";
    document.getElementById("notification").style.border = "1px solid #f5c6cb";
  }
}
