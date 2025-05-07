const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getMoneyByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await prisma.money_tb.findMany({
      where: {
        userId: parseInt(userId),
      },
    });
    if (result) {
      res.status(200).json({
        message: "found successfully",
        info: result,
      });
    } else {
      res.status(404).json({
        message: "Can't found",
        info: result,
      });
    }
  } catch (err) {
    res.status(500).json({
      error: `Server Error: ${err}`,
    });
    console.log(err);
  }
};

exports.MoneyTransaction = async (req, res) => {
  try {
    const { moneyDetail, moneyDate, moneyInOut, moneyType, userId } = req.body;
    const result = await prisma.money_tb.create({
      data: {
        moneyDetail: req.body.moneyDetail,
        moneyDate: req.body.moneyDate,
        moneyInOut: parseFloat(moneyInOut),
        moneyType: parseInt(moneyType),
        userId: parseInt(userId),
      },
    });
    res.status(201).json({
      message: "transaction success",
      info: result,
    });
  } catch (err) {
    res.status(500).json({
      error: `Server Error: ${err}`,
    });
    console.log(err);
  }
};