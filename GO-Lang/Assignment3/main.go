package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	fmt.Printf("Enter the text : ")
	reader := bufio.NewReader(os.Stdin)
	text, _ := reader.ReadString('\n')
	text = strings.TrimSuffix(text, "\n")
	text = strings.TrimSpace(text)
	words := strings.Split(text, " ")
	wordMap := make(map[string]int)
	for _, word := range words {
		wordMap[word] += 1
	}
	for key, value := range wordMap {
		fmt.Println(key, " : ", value)
	}
}
