package main

import (
	"fmt"
	"os"
	"strings"

	"golang.org/x/net/html"
)

func main() {
	file, err := os.Open("index.html")
	if err != nil {
		fmt.Println("error :", err)
	}
	docTree, _ := html.Parse(file)
	defer handlePanic()
	getNodes(docTree)
}

func getNodes(node *html.Node) {
	if node.Type == html.TextNode {
		data := strings.TrimSpace(node.Data)
		if strings.Contains(data, "Error") {
			panic("error")
		} else if strings.Contains(data, "Fatal") {
			panic("fatal")
		}
	}
	for c := node.FirstChild; c != nil; c = c.NextSibling {
		getNodes(c)
	}
}
func handlePanic() {
	if r := recover(); r != nil {
		if r == "error" {
			fmt.Println(r, "has been encounterd")
		} else if r == "fatal" {
			panic("fatal")
		}
	}
}
