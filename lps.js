function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

export default function longestCommonPalindrome(str1, str2) {
    let longest = "";

    for (let i = 0; i < str1.length; i++) {
        for (let j = i + 1; j <= str1.length; j++) {
            const sub = str1.substring(i, j);

            if (
                sub.length > longest.length &&
                isPalindrome(sub) &&
                str2.includes(sub)
            ) {
                longest = sub;
            }
        }
    }

    return longest;
}
