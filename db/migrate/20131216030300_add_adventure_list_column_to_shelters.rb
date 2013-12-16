class AddAdventureListColumnToShelters < ActiveRecord::Migration
  def change
    add_column :shelters, :adventureList, :boolean, default: true
  end
end
