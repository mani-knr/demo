package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"text/template"
)

func main() {
	players := fetchDataFromApi()

	//starting the server to serve html file

	templ, err := template.ParseFiles("template.html")
	if err != nil {
		panic(err)
	}
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		err := templ.Execute(w, players)
		if err != nil {
			panic(err)
		}
	})
	http.ListenAndServe(":3000", nil)
}
func fetchDataFromApi() []Player {
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
	var playersData ApiData
	err = json.Unmarshal(body, &playersData)
	if err != nil {
		fmt.Println("invalid json data", err)
	}
	return playersData.Players
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
