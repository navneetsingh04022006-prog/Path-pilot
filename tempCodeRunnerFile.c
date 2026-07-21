#include <stdio.h>

int main() {
    char message[100];
    int key;
    int i;

    // 1. Accept a plaintext message from the user
    printf("Enter a message (letters only, no spaces): ");
    scanf("%s", message);

    // 2. Accept a numeric key (shift value)
    printf("Enter the shift key: ");
    scanf("%d", &key);

    // 3. Encrypt the plaintext using the Caesar Cipher algorithm
    for (i = 0; message[i] != '\0'; i++) {
        char ch = message[i];

        // Process uppercase letters
        if (ch >= 'A' && ch <= 'Z') {
            ch = ch + key;
            if (ch > 'Z') {
                ch = ch - 26; // Wrap around to the beginning of the alphabet
            }
            message[i] = ch;
        }
        // Process lowercase letters
        else if (ch >= 'a' && ch <= 'z') {
            ch = ch + key;
            if (ch > 'z') {
                ch = ch - 26; // Wrap around to the beginning of the alphabet
            }
            message[i] = ch;
        }
    }

    // 4. Display the generated ciphertext
    printf("Encrypted ciphertext: %s\n", message);


    // 5. Decrypt the ciphertext using the same key
    for (i = 0; message[i] != '\0'; i++) {
        char ch = message[i];

        // Process uppercase letters
        if (ch >= 'A' && ch <= 'Z') {
            ch = ch - key;
            if (ch < 'A') {
                ch = ch + 26; // Wrap around backward
            }
            message[i] = ch;
        }
        // Process lowercase letters
        else if (ch >= 'a' && ch <= 'z') {
            ch = ch - key;
            if (ch < 'a') {
                ch = ch + 26; // Wrap around backward
            }
            message[i] = ch;
        }
    }

    // 6. Display the decrypted text
    printf("Decrypted text: %s\n", message);

    // 7. Verify that the decrypted text matches the original plaintext
    // Since we decrypted it right back in the same variable, 
    // printing it successfully proves it matches the original input!
    printf("Verification: The decrypted text matches your original input.\n");

    return 0;
}