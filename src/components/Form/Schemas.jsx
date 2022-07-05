import * as yup from "yup";

export const schemas = yup.object().shape({
  first_name: yup.string().required("Nama depan wajib diisi"),
  last_name: yup.string(),
  phone: yup.number().required("nomor handphone wajib diisi"),
  email: yup.string().email().required("email wajib diisi"),
  birth_date: yup.date().required("tanggal lahir wajib diisi"),
  education: yup
    .number()
    .oneOf([1, 2, 3])
    .required("Silahkan isi tanggal lahir"),
  country: yup.string().required("negara wajib diisi"),
  city: yup.string().required("kota wajib diisi"),
  zip_code: yup
    .number()
    .min(5, "minimal 5 angka")
    .required("kode pos wajib diisi"),
});
