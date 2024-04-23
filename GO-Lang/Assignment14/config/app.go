package config

import (
	"fmt"
	"os"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"gopkg.in/yaml.v2"
)

var (
	db *gorm.DB
)

func Connect() {
	dbstring := fmt.Sprintf("%s:%s@tcp(%s:%d)/mm_db?charset=utf8&parseTime=True&loc=Local",
		Configs.Database.Username, Configs.Database.Password,
		Configs.Database.Host, Configs.Database.Port)
	d, err := gorm.Open("mysql", dbstring)
	if err != nil {
		panic(err)
	}
	db = d
}

func GetDB() *gorm.DB {
	return db
}

type Config struct {
	Server struct {
		Port int    `yaml:"port"`
		Host string `yaml:"host"`
	} `yaml:"server"`
	Database struct {
		Username string `yaml:"user"`
		Password string `yaml:"pass"`
		Port     int    `yaml:"port"`
		Host     string `yaml:"host"`
	} `yaml:"database"`
}

var Configs Config

func Init(configFile string) {

	f, err := os.Open("../" + configFile)
	if err != nil {
		fmt.Println(err)
	}
	defer f.Close()

	decoder := yaml.NewDecoder(f)
	err = decoder.Decode(&Configs)
	if err != nil {
		fmt.Println(err)
	}
}
