const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Deck }) {
      this.belongsTo(Deck);
    }
  }
  Card.init({
    DeckId: DataTypes.INTEGER,
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
