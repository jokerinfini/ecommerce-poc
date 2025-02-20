// models/user.go
package models

type User struct {
	ID       uint   `gorm:"primaryKey"`
	Email    string `gorm:"unique"`
	Password string
	Role     string // "vendor" or "buyer"
}
