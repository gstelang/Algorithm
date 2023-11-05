package main

import ("fmt")

func gcdOfStrings(str1 string, str2 string) string {
	str1Len := len(str1)
	str2Len := len(str2)

	if (str1 + str2 != str2 + str1) {
	  return "";
	} else if (str1 == str2){
       return str1;
    } else if (str1Len > str2Len){
       return gcdOfStrings(str1[str2Len:], str2);
    } else {
        return gcdOfStrings(str2[str1Len:], str1);
    }
 };

func main() {
	answer2 := gcdOfStrings("ABABAB", "ABAB") //  "AB"
	fmt.Println(answer2)
}