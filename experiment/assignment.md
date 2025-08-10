1. **Encrypt the following plaintext using the given substitution key:**

   **Plaintext:** `Lord Rama was a great king`

   **Substitution Key:**

   ```
   Plain:  a b c d e f g h i j k l m n o p q r s t u v w x y z
   Cipher: Y N L K X B S H M I W D P J R O Q V F E U G T Z C A
   ```

   **Show your work:** Write the substitution for each letter and provide the final ciphertext.

2. **Key Space Analysis:**

   If we use a reduced alphabet = {a, b, c, d, e, f}, what is the total key space (number of possible substitution keys)?

   **Hint:** Consider that each substitution key must be a permutation of the alphabet.

3. **Decrypt the following ciphertext with the given key:**

   **Ciphertext:** `libimi wio i rlkif dxmr`

   **Substitution Key:**

   ```
   Plain:  a b c d e f g h i j k l m n o p q r s t u v w x y z
   Cipher: i s y b k j r u x e d z q m c t p l o f n b w g a h
   ```

4. **Cryptanalysis Challenge:**

   Decrypt the following mono-alphabetic substitution ciphertext using frequency analysis. No key is provided - you must discover it through cryptanalytic techniques.

   **Ciphertext:**

   ```
   LOJUM YLJME PDYVJ QXTDV SVJNL DMTJZ WMJGG YSNDL UYLEO SKDVC
   GEPJS MDIPD NEJSK DNJTJ LSKDL OSVDV DNGYN VSGLL OSCIO LGOYG
   ESNEP CGYSN GUJMJ DGYNK DPPYX PJDGG SVDNT WMSWS GYLYS NGSKJ
   CEPYQ GSGLD MLPYN IUSCP QOYGM JGCPL GDWWJ DMLSL OJCNY NYLYD
   LJQLO DLCNL YPLOJ TPJDM NJQLO JWMSE JGGJG XTUOY EOOJO DQDMM
   YBJQD LLOJV LOJTV YIOLU JPPES NGYQJ MOYVD GDNJE MSVDN EJM
   ```

5. **Frequency Analysis:**

   - Calculate the frequency of each letter in the ciphertext from question 4
   - Compare with standard English letter frequencies
   - Identify the most likely plaintext letters for the most frequent ciphertext letters

6. **Security Analysis:**
   - Explain why mono-alphabetic substitution ciphers are vulnerable to frequency analysis
   - Describe at least two methods to break a substitution cipher
   - Suggest improvements to make substitution ciphers more secure
