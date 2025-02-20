package models

type Order struct {
	ID        uint `gorm:"primaryKey"`
	ProductID uint
	BuyerID   uint
	Quantity  int
	Status    string // "pending", "confirmed", "shipped"
}
