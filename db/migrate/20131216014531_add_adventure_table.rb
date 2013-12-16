class AddAdventureTable < ActiveRecord::Migration
  def change
     create_table :adventures do |t|
      t.string :question, null: false
      t.string :answerYes, null: false
      t.string :answerNo, null: false
      t.integer :consequenceYes, null: false
      t.integer :consequenceNo, null: false
      t.timestamps
    end
  end
end


#question, answerYes, answerNo, consequenceYes, consequenceNo