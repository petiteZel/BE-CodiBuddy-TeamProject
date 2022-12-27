const Sequelize = require('sequelize');

module.exports = class UserRefreshToken extends Sequelize.Model {
    static init(sequelize) {
      return super.init({
        id:{
          type: Sequelize.INTEGER,
          allowNull:false,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        refresh_token: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        expired_at: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          validate: {
            isDate: true
          }
        },
      }, {
      sequelize,
      timestamps: true, //creatat+delete
      underscored: true, //스네이크케이스로 이름변경
      modelName: 'UserRefreshToken',
      tableName: 'userrefreshtokens',
      paranoid: false, //삭제시 완전삭제x -> 로그남김
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
    }
}