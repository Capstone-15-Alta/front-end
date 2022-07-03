import * as yup from "yup";

export const schemas = yup.object().shape({
  firstname: yup.string().required("Nama depan wajib diisi"),
  tingkatPendidikan: yup
    .string()
    .oneOf(["1", "2", "3"])
    .required("Silahkan isi tanggal lahir"),
});
