import { StyleSheet } from "react-native";

const picSizeMax = 300;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 30,
    color: "#555",
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "#555",
    marginBottom: 25,
    marginTop: 15,
  },
  h2: {
    fontSize: 24,
    marginBottom: 25,
  },

  // Library
  icon: {
    width: 30,
    height: 30,
    marginRight: 5,
    borderRadius: 15,
  },

  // Library Detail
  picBox: {
    width: picSizeMax,
    height: picSizeMax,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eaeaea",
    borderRadius: picSizeMax / 2,
    marginBottom: 30,
  },
  slider: {
    alignItems: "stretch",
    justifyContent: "center",
    width: 150,
    marginBottom: 10,
    marginTop: 10,
  },
  mainPic: {
    width: 300,
    height: 300,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 5,
    borderRadius: 15,
  },

  // MovieList
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#999",
    padding: 20,
  },
  itemPic: { width: "20%", height: 75 },
  itemMain: { width: "75%" },
  itemMainTitle: { fontSize: 18 },
  itemMainContent: {
    width: "100%",
    color: "#555",
  },

  // Movie Detail
  MDcontainer: {
    paddingHorizontal: 40,
    // justifyContent: "center", << ScrollView 不能寫這個
  },
  MDview: {
    alignItems: "center",
    paddingBottom: 30,
  },
  MDcontent: {
    marginTop: 25,
    marginBottom: 25,
    fontSize: 16,
  },
});
