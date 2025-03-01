/**
 * Aqui van todos los encabezados para los diferentes reportes.
 */

import { date } from "./Headers";

const parseData = (data, columns, customHeader) => {
  const columnKeys = Object.keys(columns);

  const csvContent =
    customHeader.join(",") +
    "\n" +
    columnKeys.map((key) => columns[key]).join(",") +
    "\n" +
    data
      .map((row) =>
        columnKeys
          .map((key) => {
            const value = row[key];

            if (typeof value === "string" && value.includes(",")) {
              return `"${value}"`;
            }

            return value;
          })
          .join(",")
      )
      .join("\n");
  return csvContent;
};

export const  partnertycColumnsExcel = {
  idpartners :"Partner ID",
  partnername :"Partner Name",
  region :"Region",
  country :"Country",
  partnerlevel :"Partner Level",
  partner_status :"Partner Status",
  pptyc :"Status T&C PP",
  pptycdate :"Date T&C PP",
  patyc :"Status T&C PA",
  totalsrusers :"Total User SR",
  totalsruserstyc :"Total Accepted TyC SR",
  acceptance_percentage :"% SR Accepted",
};

export const userPerformanceColumnsExcel = {
  email: "User Name",
  name: "FirstName",
  last_name: "LastName",
  rolname: "User Role",
  region: "Region",
  country_user: "Country",
  reseller_or_dist_id: "Membership ID",
  reseller_or_dist_name: "Company Name",
  rtype: "Company Type",
  dcname: "Company Level",
  tyc_user: "T&C User",
  tyc_date: "T&C Date",
  company_status: "Company Status",
  vip_cc_renewal: "VIP Renewal CC (USD)",
  vip_dc_renewal: "VIP Renewal  DC (USD)",
  vip_cc_newbusiness: "VIP New Business CC (USD)",
  vip_dc_newbusiness: "VIP New Business DC (USD)",
  vmp_cc_renewal: "VMP Renewal CC (USD)",
  vmp_dc_renewal: "VMP Renewal DC (USD)",
  vmp_cc_newbusiness: "VMP New Business CC (USD)",
  vmp_dc_newbusiness: "VMP New Business DC (USD)",
  vip_revenue_q1: "VIP Revenue Q1 (USD)",
  vip_revenue_q2: "VIP Revenue Q2 (USD)",
  vip_revenue_q3: "VIP Revenue Q3 (USD)",
  vip_revenue_q4: "VIP Revenue Q4 (USD)",
  vmp_revenue_q1: "VMP Revenue Q1 (USD)",
  vmp_revenue_q2: "VMP Revenue Q2 (USD)",
  vmp_revenue_q3: "VMP Revenue Q3 (USD)",
  vmp_revenue_q4: "VMP Revenue Q4 (USD)",
  revenue_q1: "Revenue Q1 (USD)",
  revenue_q2: "Revenue Q2 (USD)",
  revenue_q3: "Revenue Q3 (USD)",
  revenue_q4: "Revenue Q4 (USD)",
  vip_revenue_total: "Total VIP Revenue (USD)",
  vmp_revenue_total: "Total VMP Revenue (USD)",
  revenue_actual: "Actual Revenue (USD)",
  rma: "RMA (USD)",
  sales_digipoints: "Sales DigiPoints",
  promotion_digipoints: "Promotion DigiPoints",
  behavior_digipoints: "Behavior DigiPoints",
  total_digipoints: "Total DigiPoints",
  redenciones: "DigiPoints Redeemed",
  redenciones_over_total_digipoints: "Total % effectiveness",
};

export const digiPointsxVentasColumnsExcel = {
  sales_order: "Invoice",
  disti_partner_rollup: "Disti Partner Rollup",
  reseller_partner_rollup: "Reseller Partner Rollup",
  business_unit: "Business Unit",
  business_type: "Business Type",
  materia_sku: "SKU",
  quarter: "Quarter",
  max_digipoints_allocate: "DigiPoints",
  total_sales_us: "Total Sales US",
};

export const salesPerformanceColumnsExcel = {
  company_id: "Membership ID",
  company_name: "Company Name",
  region: "Region",
  country_id: "Country",
  company_type: "Company Type",
  level: "Company Level",
  active: "Company Status",
  usuarios: "Company Active Users",
  vip_cc_renewal: "VIP Renewal CC (USD)",
  vip_dc_renewal: "VIP Renewal DC (USD)",
  vip_cc_newbusiness: "VIP New Business CC (USD)",
  vip_dc_newbusiness: "VIP New Business DC (USD)",
  vmp_cc_renewal: "VMP Renewal CC (USD)",
  vmp_dc_renewal: "VMP Renewal DC (USD)",
  vmp_cc_newbusiness: "VMP New Business CC (USD)",
  vmp_dc_newbusiness: "VMP New Business DC (USD)",
  vip_revenue_q1: "VIP Revenue Q1 (USD)",
  vip_revenue_q2: "VIP Revenue Q2 (USD)",
  vip_revenue_q3: "VIP Revenue Q3 (USD)",
  vip_revenue_q4: "VIP Revenue Q4 (USD)",
  vmp_revenue_q1: "VMP Revenue Q1 (USD)",
  vmp_revenue_q2: "VMP Revenue Q2 (USD)",
  vmp_revenue_q3: "VMP Revenue Q3 (USD)",
  vmp_revenue_q4: "VMP Revenue Q4 (USD)",
  revenue_q1: "Revenue Q1 (USD)",
  revenue_q2: "Revenue Q2 (USD)",
  revenue_q3: "Revenue Q3 (USD)",
  revenue_q4: "Revenue Q4 (USD)",
  total_vip: "Total VIP Revenue (USD)",
  total_vmp: "Total VMP Revenue (USD)",
  rma: "RMA (USD)",
  actual_revenue: "Actual Revenue (USD)",
  total_revenue: "Total Revenue (USD)",
  expected_revenue: "Expected Revenue (USD)",
  avg_effectiveness: "Total % effectiveness",
};

export const digiPointsPerformanceColumnsExcel = {
  company_id: "Membership ID",
  company_name: "Company Name",
  region: "Region",
  country: "Country",
  company_type: "Company Type",
  company_level: "Company Level",
  company_status: "Company Status",
  company_active_users: "Company Active Users",
  digipoints_uploaded: "Total DigiPoints Uploaded",
  digipoints_assigned: "Total DigiPoints Assigned",
  digipoints_unassigned: "Total DigiPoints Unassigned",
  behavior_digipoints_salesrep: "Total Behavior",
  sales_digipoints_admin: "Sales DigiPoints (Admin)",
  promo_digipoints_admin: "Promo DigiPoints (Admin)",
  digipoints_admin: "DigiPoints Assigned (Admin)",
  sales_digipoints_salesrep: "Sales DigiPoints (Sales Rep)",
  promo_digipoints_salesrep: "Promo DigiPoints (Sales Rep)",
  behavior_digipoints_salesrep: "Total Behavior",
  digipoints_salesrep: "DigiPoints Assigned (Sales Rep)",
  digipoints_redeemed_admin: "DigiPoints Redeemed (Admin)",
  digipoints_redeemed_sales_rep: "DigiPoints Redeemed(Sales Rep)",
  digipoints_redeemed: "Total DigiPoints Redeemed",
  total_avg_assigned: "% Assigned",
  total_avg_redeemed: "% Redeemed",
};

export const digipointRedemtionColumnsExcel = {
  email: "User Email",
  name: "First Name",
  role_name: "User Role",
  region: "Region",
  country: "Country",
  company_id: "Company ID",
  company_name: "Company Name",
  company_level: "Company Level",
  pp_email: "Partner Principal User Email",
  pp_tos: "Partner Principal Accepted ToS",
  ordernumber: "Request ID",
  digipoint_substract: "Redeemed DigiPoints",
  total_quantity: "Quantity",
  total_price: "Amount (USD)",
  created_at: "Redeemed On",
  status_name: "Reward Status",
};

export const invoiceColumnsExcel = {
  company_id: "Membership ID",
  company_name: "Company Name",
  company_region: "Region",
  company_country: "Country",
  partner_type: "Company Type",
  company_level: "Company Level",
  user: " User Name",
  user_role: "User Role",
  market_segment: "Market Segment",
  client: "Client",
  licensing_contract: "Licensing Contract",
  major_licensing_program_id: "Major Licensing Programid",
  invoice: "Sales Order ",
  material_sku: "Material Sku",
  product_name: "Product Name",
  business_unit: "Business Unit",
  business_type: "Business Type",
  product_category: "Product Category",
  sub_bu: "Sub Bu",
  quantity: "Quantity",
  amount_by_user: "Revenue by user (USD)",
  digipoints_by_user: "Sales DigiPoints by user",
  is_promo_by_user: "Promotions DigiPoints",
  promoname: "Promotions Name",
  invoice_sale_date: "Invoice Sale Date",
  invoice_load_date: "Invoice Load Date",
  invoice_assigned_date: "Invoice assigned Date",
};

export const digiPointsByPromotionsExel = {
  promotions_name: "Promotions Name",
  invoice: "Invoice",
  promotions_digipoints: "Promotions DigiPoints",
  user_name: "User Name",
  firstname: "FirstName",
  lastname: "LastName",
  user_role: "User Role",
  user_region: "Region",
  user_country: "Country",
  membership_id: "Membership ID",
  company_name: "Company Name",
  company_type: "Company Type",
  company_level: "Company Level",
};

export const digiPointsByBehaviorExel = {
  behavior_name: "Behavior Name",
  behavior_digipoints: "Behavior DigiPoints",
  user_name: "User Name",
  firstname: "FirstName",
  lastname: "LastName",
  user_role: "User Role",
  user_region: "Region",
  user_country: "Country",
  membership_id: "Membership ID",
  company_name: "Company Name",
  company_type: "Company Type",
  company_level: "Company Level",
};

export const partnertycColumnsCsv = (data) => {
  const columns = {
  idpartners :"Partner ID",
  partnername :"Partner Name",
  region :"Region",
  country :"Country",
  partnerlevel :"Partner Level",
  partner_status :"Partner Status",
  pptyc :"Status T&C PP",
  pptycdate :"Date T&C PP",
  patyc :"Status T&C PA",
  totalsrusers :"Total User SR",
  totalsruserstyc :"Total Accepted TyC SR",
  acceptance_percentage :"% SR Accepted",
};
const customHeader = [
  "Adobe Partner Connection Club",
  "Partner T&C",
  date(),
];
const result = parseData(data, columns, customHeader);
return result;
};

export const userPerformanceColumnsCsv = (data) => {
  const columns = {
    email: "User Name",
    name: "FirstName",
    last_name: "LastName",
    rolname: "User Role",
    region: "Region",
    country_user: "Country",
    reseller_or_dist_id: "Membership ID",
    reseller_or_dist_name: "Company Name",
    rtype: "Company Type",
    dcname: "Company Level",
    tyc_user: "T&C User",
    tyc_date: "T&C Date",
    company_status: "Company Status",
    vip_cc_renewal: "VIP Renewal CC (USD)",
    vip_dc_renewal: "VIP Renewal  DC (USD)",
    vip_cc_newbusiness: "VIP New Business CC (USD)",
    vip_dc_newbusiness: "VIP New Business DC (USD)",
    vmp_cc_renewal: "VMP Renewal CC (USD)",
    vmp_dc_renewal: "VMP Renewal DC (USD)",
    vmp_cc_newbusiness: "VMP New Business CC (USD)",
    vmp_dc_newbusiness: "VMP New Business DC (USD)",
    vip_revenue_q1: "VIP Revenue Q1 (USD)",
    vip_revenue_q2: "VIP Revenue Q2 (USD)",
    vip_revenue_q3: "VIP Revenue Q3 (USD)",
    vip_revenue_q4: "VIP Revenue Q4 (USD)",
    vmp_revenue_q1: "VMP Revenue Q1 (USD)",
    vmp_revenue_q2: "VMP Revenue Q2 (USD)",
    vmp_revenue_q3: "VMP Revenue Q3 (USD)",
    vmp_revenue_q4: "VMP Revenue Q4 (USD)",
    revenue_q1: "Revenue Q1 (USD)",
    revenue_q2: "Revenue Q2 (USD)",
    revenue_q3: "Revenue Q3 (USD)",
    revenue_q4: "Revenue Q4 (USD)",
    vip_revenue_total: "Total VIP Revenue (USD)",
    vmp_revenue_total: "Total VMP Revenue (USD)",
    revenue_actual: "Actual Revenue (USD)",
    rma: "RMA (USD)",
    sales_digipoints: "Sales DigiPoints",
    promotion_digipoints: "Promotion DigiPoints",
    behavior_digipoints: "Behavior DigiPoints",
    total_digipoints: "Total DigiPoints",
    redenciones: "DigiPoints Redeemed",
    redenciones_over_total_digipoints: "Total % effectiveness",
  };
  const customHeader = [
    "Adobe Partner Connection Club",
    "User Performance",
    date(),
  ];
  const result = parseData(data, columns, customHeader);
  return result;
};

export const digiPointsxVentasColumnsExcelCsv = (data) => {
  const columns = {
    sales_order: "Invoice",
    disti_partner_rollup: "Disti Partner Rollup",
    reseller_partner_rollup: "Reseller Partner Rollup",
    business_unit: "Business Unit",
    business_type: "Business Type",
    materia_sku: "SKU",
    quarter: "Quarter",
    max_digipoints_allocate: "DigiPoints",
    total_sales_us: "Total Sales US",
  };
  const customHeader = [
    "Adobe Partner Connection Club",
    "DigiPoints por ventas",
    date(),
  ];
  const result = parseData(data, columns, customHeader);
  return result;
};

export const digiPointsPerformanceColumnsCsv = (data) => {
  const columns = {
    company_id: "Membership ID",
    company_name: "Company Name",
    region: "Region",
    country: "Country",
    company_type: "Company Type",
    company_level: "Company Level",
    company_status: "Company Status",
    company_active_users: "Company Active Users",
    digipoints_uploaded: "Total DigiPoints Uploaded",
    digipoints_assigned: "Total DigiPoints Assigned",
    digipoints_unassigned: "Total DigiPoints Unassigned",
    behavior_digipoints_salesrep: "Total Behavior",
    sales_digipoints_admin: "Sales DigiPoints (Admin)",
    promo_digipoints_admin: "Promo DigiPoints (Admin)",
    digipoints_admin: "DigiPoints Assigned (Admin)",
    sales_digipoints_salesrep: "Sales DigiPoints (Sales Rep)",
    promo_digipoints_salesrep: "Promo DigiPoints (Sales Rep)",
    behavior_digipoints_salesrep: "Total Behavior",
    digipoints_salesrep: "DigiPoints Assigned (Sales Rep)",
    digipoints_redeemed_admin: "DigiPoints Redeemed (Admin)",
    digipoints_redeemed_sales_rep: "DigiPoints Redeemed(Sales Rep)",
    digipoints_redeemed: "Total DigiPoints Redeemed",
    total_avg_assigned: "% Assigned",
    total_avg_redeemed: "% Redeemed",
  };
  const customHeader = [
    "Adobe Partner Connection Club",
    "DigiPoints Performance",
    date(),
  ];
  const result = parseData(data, columns, customHeader);
  return result;
};

export const salesPerformanceColumnsCsv = (data) => {
  const columns = {
    company_id: "Membership ID",
    company_name: "Company Name",
    region: "Region",
    country_id: "Country",
    company_type: "Company Type",
    level: "Company Level",
    active: "Company Status",
    usuarios: "Company Active Users",
    vip_cc_renewal: "VIP Renewal CC (USD)",
    vip_dc_renewal: "VIP Renewal DC (USD)",
    vip_cc_newbusiness: "VIP New Business CC (USD)",
    vip_dc_newbusiness: "VIP New Business DC (USD)",
    vmp_cc_renewal: "VMP Renewal CC (USD)",
    vmp_dc_renewal: "VMP Renewal DC (USD)",
    vmp_cc_newbusiness: "VMP New Business CC (USD)",
    vmp_dc_newbusiness: "VMP New Business DC (USD)",
    vip_revenue_q1: "VIP Revenue Q1 (USD)",
    vip_revenue_q2: "VIP Revenue Q2 (USD)",
    vip_revenue_q3: "VIP Revenue Q3 (USD)",
    vip_revenue_q4: "VIP Revenue Q4 (USD)",
    vmp_revenue_q1: "VMP Revenue Q1 (USD)",
    vmp_revenue_q2: "VMP Revenue Q2 (USD)",
    vmp_revenue_q3: "VMP Revenue Q3 (USD)",
    vmp_revenue_q4: "VMP Revenue Q4 (USD)",
    revenue_q1: "Revenue Q1 (USD)",
    revenue_q2: "Revenue Q2 (USD)",
    revenue_q3: "Revenue Q3 (USD)",
    revenue_q4: "Revenue Q4 (USD)",
    total_vip: "Total VIP Revenue (USD)",
    total_vmp: "Total VMP Revenue (USD)",
    rma: "RMA (USD)",
    actual_revenue: "Actual Revenue (USD)",
    total_revenue: "Total Revenue (USD)",
    expected_revenue: "Expected Revenue (USD)",
    avg_effectiveness: "Total % effectiveness",
  };

  const customHeader = [
    "Adobe Partner Connection Club",
    "Sales Performance",
    date(),
  ];

  const result = parseData(data, columns, customHeader);
  return result;
};

export const digipointRedemtionColumnsCsv = (data) => {
  const columns = {
    email: "User Email",
    name: "First Name",
    last_name: "Last Name",
    role_name: "User Role",
    region: "Region",
    country: "Country",
    company_id: "Company ID",
    company_name: "Company Name",
    company_level: "Company Level",
    pp_email: "Partner Principal User Email",
    pp_tos: "Partner Principal Accepted ToS",
    ordernumber: "Request ID",
    digipoint_substract: "Redeemed DigiPoints",
    total_quantity: "Quantity",
    total_price: "Amount (USD)",
    created_at: "Redeemed On",
    status_name: "Reward Status",
  };

  const customHeader = [
    "Adobe Partner Connection Club",
    "DigiPoints Redemption",
    date(),
  ];

  const result = parseData(data, columns, customHeader);
  return result;
};

export const invoiceColumnsCsv = (data) => {
  const columns = {
    company_id: "Membership ID",
    company_name: "Company Name",
    company_region: "Region",
    company_country: "Country",
    partner_type: "Company Type",
    company_level: "Company Level",
    user: " User Name",
    user_role: "User Role",
    market_segment: "Market Segment",
    client: "Client",
    licensing_contract: "Licensing Contract",
    major_licensing_program_id: "Major Licensing Programid",
    invoice: "Sales Order ",
    material_sku: "Material Sku",
    product_name: "Product Name",
    business_unit: "Business Unit",
    business_type: "Business Type",
    product_category: "Product Category",
    sub_bu: "Sub Bu",
    quantity: "Quantity",
    amount_by_user: "Revenue by user (USD)",
    digipoints_by_user: "Sales DigiPoints by user",
    is_promo_by_user: "Apply Promo",
    promoname: "Promotions Name",
    invoice_sale_date: "Invoice Sale Date",
    invoice_load_date: "Invoice Load Date",
    invoice_assigned_date: "Invoice assigned Date",
  };

  const customHeader = ["Adobe Partner Connection Club", "Invoice", date()];

  const result = parseData(data, columns, customHeader);
  return result;
};

export const digiPointsByPromotionsCsv = (data) => {
  const columns = {
    promotions_name: "Promotions Name",
    invoice: "Invoice",
    promotions_digipoints: "Promotions DigiPoints",
    user_name: "User Name",
    firstname: "FirstName",
    lastname: "LastName",
    user_role: "User Role",
    user_region: "Region",
    user_country: "Country",
    membership_id: "Membership ID",
    company_name: "Company Name",
    company_type: "Company Type",
    company_level: "Company Level",
  };

  const customHeader = ["Adobe Partner Connection Club", "Promo Report", date()];

  const result = parseData(data, columns, customHeader);
  return result;
};

export const digiPointsByBehaviorCsv = (data) => {
  const columns = {
    behavior_name: "Behavior Name",
    behavior_digipoints: "Behavior DigiPoints",
    user_name: "User Name",
    firstname: "FirstName",
    lastname: "LastName",
    user_role: "User Role",
    user_region: "Region",
    user_country: "Country",
    membership_id: "Membership ID",
    company_name: "Company Name",
    company_type: "Company Type",
    company_level: "Company Level",
  };

  const customHeader = ["Adobe Partner Connection Club", "Behavior Report", date()];

  const result = parseData(data, columns, customHeader);
  return result;
};