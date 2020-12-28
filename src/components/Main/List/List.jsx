import React from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from "./styles";

const List = () => {
  const classes = useStyles();

  const transactions = [
    {
      id: 1,
      type: "Thu nhập",
      category: "Lương",
      amount: 50,
      date: "Mon Dec 28",
    },
    {
      id: 2,
      type: "Chi tiêu",
      category: "Thú nuôi",
      amount: 50,
      date: "Tue Dec 29",
    },
    {
      id: 3,
      type: "Thu nhập",
      category: "Kinh doanh",
      amount: 150,
      date: "Wed Dec 30",
    },
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Thu nhập"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
