package main

import "fmt"

func mergeAlternately(word1 string, word2 string) string {
    mergedStr := ""

	wordOneLength := len(word1)
	wordTwoLength := len(word2)

	i := 0

	for ;i < wordOneLength; i++ {
		mergedStr += string(word1[i])
		if (i < wordTwoLength) {
			mergedStr += string(word2[i])
		} else {
			break
		}
	}

	if (i+1 < wordOneLength) {
		mergedStr += word1[i+1:wordOneLength];
	}
    if (i < wordTwoLength) {
        mergedStr += word2[i+1:wordTwoLength];
    }

	return mergedStr
}

func main () {
	answer1 := mergeAlternately("abc", "pqr"); // apbqcr
	// answer2 := mergeAlternately("ab", "pqrs"); // apbqrs
	// answer3 := mergeAlternately("abcd", "pq"); // apbqcd
	
	fmt.Println(answer1);
}



