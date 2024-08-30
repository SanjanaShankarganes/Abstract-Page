import React from 'react';
/*code for datewise immersion count*/
const data = [
  {
    sNo: 1,
    date: '2024-08-01',
    nammakal: { publicCount: 120, orgCount: 30 },
    tiruchengode: { publicCount: 150, orgCount: 40 },
    rasipuram: { publicCount: 100, orgCount: 20 },
    velore: { publicCount: 180, orgCount: 60 },
    totalCount: 0, 
  },
  {
    sNo: 2,
    date: '2024-08-02',
    nammakal: { publicCount: 110, orgCount: 25 },
    tiruchengode: { publicCount: 160, orgCount: 35 },
    rasipuram: { publicCount: 90, orgCount: 15 },
    velore: { publicCount: 170, orgCount: 55 },
    totalCount: 0,
  }
];

const calculateTotalCount = (row) => {
  return (
    row.nammakal.publicCount +
    row.nammakal.orgCount +
    row.tiruchengode.publicCount +
    row.tiruchengode.orgCount +
    row.rasipuram.publicCount +
    row.rasipuram.orgCount +
    row.velore.publicCount +
    row.velore.orgCount
  );
};

const headers = [
  { name: 'Nammakal', public: 'Public', org: 'Org' },
  { name: 'Tiruchengode', public: 'Public', org: 'Org' },
  { name: 'Rasipuram', public: 'Public', org: 'Org' },
  { name: 'Velore', public: 'Public', org: 'Org' },
];
const Datewise = () => {
  return (
    <div>
      <p className="h1 my-5">Date Wise Immersion Count</p>
      <div className="table-responsive-xxl m-5">
      <table className="table table-sm table-bordered border-dark  table-hover table-striped table-light">
        <thead>
          <tr>
            <th className="align-middle" rowSpan="2">S.No</th>
            <th  className="align-middle" rowSpan="2">Date</th>
            {headers.map((header, index) => (
              <React.Fragment key={index}>
                <th colSpan="2">{header.name}</th>
              </React.Fragment>
            ))}
            <th className="align-middle" rowSpan="2">Total</th>
          </tr>
          <tr>
            {headers.map((header, index) => (
              <React.Fragment key={index}>
                <th>{header.public}</th>
                <th>{header.org}</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody >
          {data.map((row) => (
            <tr key={row.sNo}>
              <td>{row.sNo}</td>
              <td>{row.date}</td>
              <td>{row.nammakal.publicCount}</td>
              <td>{row.nammakal.orgCount}</td>
              <td>{row.tiruchengode.publicCount}</td>
              <td>{row.tiruchengode.orgCount}</td>
              <td>{row.rasipuram.publicCount}</td>
              <td>{row.rasipuram.orgCount}</td>
              <td>{row.velore.publicCount}</td>
              <td>{row.velore.orgCount}</td>
              <td>{calculateTotalCount(row)}</td>
            </tr>
          ))}
        </tbody>
      </table></div>
    </div>
  );
};

/* end -------------- code for datewise immersion count*/
/*code for part-wise installation count*/
const PartyWiseInstallation = () => {
  const data = [
    {
      dist: "Namakkal",
      parties: {
        HF: 10,
        HMK: 5,
        VHP: 8,
        BJP: 3,
        "Sakthi sena": 4,
        HAP: 6,
        HS: 7,
        "Akilabarathanuman sena": 2,
        "VHP/Bajrangal": 3,
        "Siva sena": 1,
        IMK: 2,
        HSME: 5,
        Others: 6,
      },
    },
    {
      dist: "Rasipuram",
      parties: {
        HF: 2,
        HMK: 7,
        VHP: 6,
        BJP: 12,
        "Sakthi sena": 5,
        HAP: 3,
        HS: 8,
        "Akilabarathanuman sena": 1,
        "VHP/Bajrangal": 2,
        "Siva sena": 0,
        IMK: 2,
        HSME: 4,
        Others: 5,
      },
    },
    {
      dist: "Tiruchengode",
      parties: {
        HF: 9,
        HMK: 8,
        VHP: 7,
        BJP: 11,
        "Sakthi sena": 2,
        HAP: 4,
        HS: 7,
        "Akilabarathanuman sena": 0,
        "VHP/Bajrangal": 2,
        "Siva sena": 1,
        IMK: 1,
        HSME: 3,
        Others: 6,
      },
    },
    {
      dist: "Velore",
      parties: {
        HF: 14,
        HMK: 3,
        VHP: 6,
        BJP: 5,
        "Sakthi sena": 7,
        HAP: 4,
        HS: 6,
        "Akilabarathanuman sena": 3,
        "VHP/Bajrangal": 4,
        "Siva sena": 0,
        IMK: 2,
        HSME: 3,
        Others: 5,
      },
    },
  ];
  const partyNames = Array.from(
    new Set(data.flatMap((row) => Object.keys(row.parties)))
  );

  return (
    <div>
      <p className="h1 my-5">Party-wise Installation Details</p>
      <div className="table-responsive-xxl m-5 ">
      <table className="table table-sm table-bordered border-dark  table-hover table-striped table-light">
        <thead>
          <tr>
            <th className="align-middle"  rowSpan="2">District</th>
            <th colSpan={partyNames.length}>Party-wise/Organization/Public</th>
            <th className="align-middle" rowSpan="2">Total Count of Idols</th>
          </tr>
          <tr>
            {partyNames.map((party) => (
              <th key={party}>{party}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            const totalCount = Object.values(row.parties).reduce(
              (acc, count) => acc + count,
              0
            );
            return (
              <tr key={index}>
                <td>{row.dist}</td>
                {partyNames.map((party) => (
                  <td key={party}>{row.parties[party] || 0}</td>
                ))}
                <td>{totalCount}</td>
              </tr>
            );
          })}
        </tbody>
      </table></div>
    </div>
  );
};
/*end ---------code for part-wise installation count*/
/*code for registration count*/
const IdolTable = () => {
  const tableData = [
    {
      category: "Total no of idols registered",
      sensitive: 0,
      nonSensitive: 0,
      hyperSensitive: 0,
      total: 0,
    },
    {
      category: "Total no of idols immersed",
      sensitive: 0,
      nonSensitive: 0,
      hyperSensitive: 0,
      total: 0,
    },
    {
      category: "Total no of idols not immersed",
      sensitive: 0,
      nonSensitive: 0,
      hyperSensitive: 0,
      total: 0,
    },
    {
      category: "Public",
      sensitive: 0,
      nonSensitive: 0,
      hyperSensitive: 0,
      total: 0,
    },
    {
      category: "Private",
      sensitive: 0,
      nonSensitive: 0,
      hyperSensitive: 0,
      total: 0,
    },
    {
      category: "Organization",
      sensitive: 0,
      nonSensitive: 0,
      hyperSensitive: 0,
      total: 0,
    },
  ];

  return (
    <div>
        <p className="h1 my-5">Registration count</p>
        <div className="table-responsive-xxl m-5">
    <table className="table table-sm  table-bordered border-dark  table-hover table-striped table-light">
      <thead>
        <tr>
          <th>Category</th>
          <th>Sensitive</th>
          <th>Non-sensitive</th>
          <th>Hyper-sensitive</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.category}</td>
            <td>{row.sensitive}</td>
            <td>{row.nonSensitive}</td>
            <td>{row.hyperSensitive}</td>
            <td>{row.total}</td>
          </tr>
        ))}
      </tbody>
    </table></div>
   </div>
  );
};

/*end ---------code for registraion count*/
const AllTables = () => {
  return (
    <div>
      <Datewise />
      <PartyWiseInstallation />
      <IdolTable/>
    </div>
  );
};

export default AllTables;
