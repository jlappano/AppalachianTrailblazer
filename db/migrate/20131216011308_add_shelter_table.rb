class AddShelterTable < ActiveRecord::Migration
  def change
    create_table :shelters do |t|
      t.integer :sequence, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.string :name, null: false
      t.timestamps
    end
  end
end
