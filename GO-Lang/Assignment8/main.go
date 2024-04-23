package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io"
	"net/http"
	"os"
)

func main() {
	fmt.Println("api assignment8")
	client := &http.Client{}
	url := "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/trending"
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		panic(nil)
	}
	req.Header.Set("X-RapidAPI-Key", "0d8f78ec23msh217bae390745af8p18e20fjsncc18ae6e5bb1")
	req.Header.Set("X-RapidAPI-Host", "cricbuzz-cricket.p.rapidapi.com")
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		panic(fmt.Sprintf("Invalid response by server %v", resp.StatusCode))
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}
	var players ApiData
	err = json.Unmarshal(body, &players)
	if err != nil {
		fmt.Println("invalid json data", err)
	}
	fmt.Println("CRICKETERS --->", players.Category)
	printFormattedData(players.Players)
}

type Player struct {
	Id          string `json:"id"`
	Name        string `json:"name"`
	TeamName    string `json:"teamName"`
	FaceImageId string `json:"faceImageId"`
}

type ApiData struct {
	Players  []Player `json:"player"`
	Category string   `json:"category"`
}

func printFormattedData(players []Player) {
	const temp = `
	Id : {{.Id}}
	Name : {{.Name}}
	UserName : {{.TeamName}}
	`
	for _, player := range players {
		t := template.Must(template.New("playersData").Parse(temp))
		err := t.Execute(os.Stdout, player)
		if err != nil {
			panic(err)
		}
		fmt.Println("-------------------------------------------------")
	}
}
