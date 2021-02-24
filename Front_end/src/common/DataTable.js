export const customStyles = {
    headCells: {
      style: {
        background: '#333',
        color: '#fff',
        '&:hover': {
            cursor: 'pointer',
            color: '#fff'
          }
      },
    }
}

export const columns = [
 
 
  {
    name: 'Name',
    selector:'name',
    sortable: true
  },
      {
        name: 'Email',
        selector:'email',
        sortable: true
      },
       {
    name: 'Mobile',
    selector: 'mobile',
    sortable: true,
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true
  }

]
// onRowExpandToggled={(toggleState,row)=>{
  // console.log(row)
// }}