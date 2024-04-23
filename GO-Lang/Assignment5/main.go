package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	fmt.Println("hello bro")
	files, err := os.ReadDir(".")
	if err != nil {
		fmt.Println("error : ", err)
	}
	fileMap := make(map[string]int)
	for _, file := range files {
		newFile, err := os.Open(file.Name())
		if err != nil {
			fmt.Println("File error : ", err)
		}
		defer newFile.Close()
		scanner := bufio.NewScanner(newFile)
		for scanner.Scan() {
			fileMap[file.Name()] += 1
		}
		if err := scanner.Err(); err != nil {
			fmt.Println("Scanner error : ", err)
		}
	}
	for key, value := range fileMap {
		fmt.Printf("FileName : %v , LineCount : %v\n", key, value)
	}
}
