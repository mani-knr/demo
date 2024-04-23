package main

import (
	"fmt"

	c "gradious.com/exercises/hotels/config"
	"gradious.com/exercises/hotels/models"
	"gradious.com/exercises/hotels/routes"
)

func main() {
	c.Init("config.yaml")
	models.Init()
	e := routes.Init()

	serverString := fmt.Sprintf("%s:%d",
		c.Configs.Server.Host,
		c.Configs.Server.Port)
	e.Logger.Fatal(e.Start(serverString))
}
