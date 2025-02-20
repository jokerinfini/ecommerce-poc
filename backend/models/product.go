package models

type Product struct {
	ID          uint `gorm:"primaryKey"`
	Name        string
	Description string
	Price       float64
	Stock       int
	VendorID    uint // Foreign key to User
}
