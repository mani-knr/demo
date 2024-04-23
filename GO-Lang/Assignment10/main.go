package main

import (
	"fmt"
	"net/http"
	"strings"

	"golang.org/x/net/html"
)

func main() {
	resp, err := http.Get("https://gradious.com/")
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	docTree, _ := html.Parse(resp.Body)
	fmt.Println(extractText(docTree))
}

func extractText(n *html.Node) string {
	var result string
	if n.Type == html.TextNode && n.Parent.Data != "script" && n.Parent.Data != "style" {
		return strings.TrimSpace(n.Data)
	}
	for c := n.FirstChild; c != nil; c = c.NextSibling {
		result += extractText(c)
	}
	return result
}
