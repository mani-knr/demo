package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	file, err := os.Open("demo.txt")

	if err != nil {
		fmt.Println("Error : ", err)
		return
	}
	wordMap := make(map[string]int)
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		words := strings.Split(line, " ")
		for _, word := range words {
			wordMap[word] += 1
		}
		for key, value := range wordMap {
			fmt.Printf(" %v : %v\n", key, value)
		}
	}
	if err := scanner.Err(); err != nil {
		fmt.Println("Scanner Error : ", err)
	}
}
