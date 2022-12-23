const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      user_id: {
        type: Sequelize.STRING(16),
        allowNull: false,
        unique: true,
      },
      pw: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      nickname: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: true,
      },
      introduce: {
        type: Sequelize.TEXT('tiny'),
        allowNull: true,
      },
      profile_image: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      point: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 5000
      },
    }, {
      sequelize,
      timestamps: false, //creatat+deleteat
      underscored: true, //스네이크케이스로 이름변경
      modelName: 'User',
      tableName: 'users',
      paranoid: true, //삭제시 완전삭제x -> 로그남김
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db){
    db.User.hasMany(db.User_tag, { foreignKey: 'user_id', sourceKey: 'id'});
    db.User_tag.belongsTo(db.User);
    db.User.hasMany(db.Like, { foreignKey: 'user_id', sourceKey: 'id'});
    db.Like.belongsTo(db.User);
    db.User.hasMany(db.Recruit, { foreignKey: 'user_id', sourceKey: 'id'});
    db.Recruit.belongsTo(db.User);
    db.User.hasMany(db.Comment, { foreignKey: 'user_id', sourceKey: 'id'});
    db.Comment.belongsTo(db.Comment);
  }
  
};

