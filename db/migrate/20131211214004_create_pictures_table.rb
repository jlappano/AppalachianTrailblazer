class CreatePicturesTable < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :url, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.timestamps
    end
  end
end
