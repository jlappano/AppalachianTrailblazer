class RemoveAdventureListFromShelters < ActiveRecord::Migration
  def change
    remove_column :shelters, :adventureList
  end
end
