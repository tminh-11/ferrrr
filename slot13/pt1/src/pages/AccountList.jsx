import React, { useEffect, useState, useContext } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { getAccounts, updateAccountStatus } from "../services/api";
import FilterBar from "../components/FilterBar";
import ToastMessage from "../components/ToastMessage";

const AccountList = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Sort");

  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success",
  });

  useEffect(() => {
    if (!state.user) {
      navigate("/login");
      return;
    }
    const fetchData = async () => {
      const data = await getAccounts();
      dispatch({ type: "SET_ACCOUNTS", payload: data });
    };
    fetchData();
  }, [state.user, dispatch, navigate]);

  const handleToggleStatus = (account) => {
    if (state.user.id === account.id) {
      setToast({
        show: true,
        message: "Cannot self-lock the currently logged-user admin.",
        variant: "warning",
      });
      return;
    }
    setSelectedAccount(account);
    setShowConfirm(true);
  };

  const confirmToggleStatus = async () => {
    if (!selectedAccount) return;

    const newStatus = selectedAccount.status === "active" ? "locked" : "active";
    try {
      await updateAccountStatus(selectedAccount.id, newStatus);
      dispatch({
        type: "UPDATE_ACCOUNT_STATUS",
        payload: { id: selectedAccount.id, status: newStatus },
      });
      setShowConfirm(false);
      setToast({
        show: true,
        message:
          newStatus === "locked"
            ? "Locked successfully"
            : "Unlocked successfully",
        variant: "success",
      });
    } catch (error) {
      console.error("Failed to update status");
    }
  };

  // Derived filtering & sorting
  let filteredAccounts = state.accounts.filter((acc) => {
    const matchSearch =
      acc.username.toLowerCase().includes(search.toLowerCase()) ||
      acc.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = roleFilter === "All" || acc.role === roleFilter;
    const matchStatus = statusFilter === "All" || acc.status === statusFilter;
    return matchSearch && matchRole && matchStatus;
  });

  if (sortOrder !== "Sort") {
    filteredAccounts.sort((a, b) => {
      if (sortOrder === "Username Asc")
        return a.username.localeCompare(b.username);
      if (sortOrder === "Username Desc")
        return b.username.localeCompare(a.username);
      if (sortOrder === "Role Admin") return a.role === "admin" ? -1 : 1;
      if (sortOrder === "Role User") return a.role === "user" ? -1 : 1;
      if (sortOrder === "Status Active") return a.status === "active" ? -1 : 1;
      if (sortOrder === "Status Locked") return a.status === "locked" ? -1 : 1;
      return 0;
    });
  }

  return (
    <Container className="mt-4">
      <ToastMessage
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
        message={toast.message}
        variant={toast.variant}
      />

      <FilterBar
        search={search}
        setSearch={setSearch}
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <Table responsive hover className="mt-3 align-middle bg-white shadow-sm">
        <thead className="table-light">
          <tr>
            <th>Avatar</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAccounts.map((acc) => (
            <tr key={acc.id}>
              <td>
                <img
                  src={acc.avatar}
                  alt="avatar"
                  width="40"
                  height="40"
                  className="rounded-circle"
                />
              </td>
              <td>{acc.username}</td>
              <td>{acc.email}</td>
              <td>{acc.role}</td>
              <td>{acc.status}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  className="me-2"
                  onClick={() => navigate(`/accounts/${acc.id}`)}
                >
                  View Details
                </Button>
                <Button
                  variant={acc.status === "active" ? "danger" : "success"}
                  size="sm"
                  onClick={() => handleToggleStatus(acc)}
                >
                  {acc.status === "active" ? "Lock" : "Unlock"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Body className="text-center py-4 fs-5">
          {selectedAccount?.status === "active"
            ? `Lock account ${selectedAccount?.username}? The user cannot log in after this.`
            : `Unlock account ${selectedAccount?.username}?`}
        </Modal.Body>
        <Modal.Footer className="justify-content-center border-0 pt-0">
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancel
          </Button>
          <Button
            variant={
              selectedAccount?.status === "active" ? "danger" : "success"
            }
            onClick={confirmToggleStatus}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AccountList;
