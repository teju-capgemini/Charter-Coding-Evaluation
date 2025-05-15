import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "../pages/module/Dashboard/style.module.css";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({ open, setOpen, transaction }) {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.modalRow}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h7"
              style={{ fontWeight: "bold" }}
            >
              Customer Name :
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="h6"
              component="h7"
              style={{ marginLeft: 5 }}
            >
              {transaction.customerName}
            </Typography>
          </div>

          <div className={styles.modalRow}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h7"
              style={{ fontWeight: "bold" }}
            >
              Amount :
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="h6"
              component="h7"
              style={{ marginLeft: 5 }}
            >
              {transaction.amount}
            </Typography>
          </div>

          <div className={styles.modalRow}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h7"
              style={{ fontWeight: "bold" }}
            >
              Date :
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="h6"
              component="h7"
              style={{ marginLeft: 5 }}
            >
              {transaction.date}
            </Typography>
          </div>

          <div className={styles.modalRow}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h7"
              style={{ fontWeight: "bold" }}
            >
              Monthly Points :
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="h6"
              component="h7"
              style={{ marginLeft: 5 }}
            >
              {transaction.monthlyPoints}
            </Typography>
          </div>

          <div className={styles.modalRow}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h7"
              style={{ fontWeight: "bold" }}
            >
              Total Points :
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="h6"
              component="h7"
              style={{ marginLeft: 5 }}
            >
              {transaction.totalPoints}
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

CustomModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  transaction: PropTypes.shape({
    customerId: PropTypes.number,
    customerName: PropTypes.string,
    transactionId: PropTypes.string,
    amount: PropTypes.number,
    date: PropTypes.string,
    customizeDate: PropTypes.string,
    monthlyPoints:  PropTypes.number,
    totalPoints: PropTypes.number
  })
};
