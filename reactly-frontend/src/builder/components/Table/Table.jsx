import MaterialTable from "@material-table/core";

const Table = ({
  title,
  columns,
  data,
  onRowAdd,
  onRowUpdate,
  onRowDelete,
  onRowClick,
  isLoading
}) => {
  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      isLoading={isLoading}
      options={{
        actionsColumnIndex: -1,
        pageSize: 10,
      }}
      onRowClick={onRowClick}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              onRowAdd(newData);
              resolve();
            }, 1000);
          }),

        onRowUpdate: (newData, oldData) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              onRowUpdate(newData, oldData);
              resolve();
            }, 1000);
          });
        },

        onRowDelete: (oldData) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              onRowDelete(oldData);
              resolve();
            }, 1000);
          });
        },
      }}
    />
  );
};

export default Table;
