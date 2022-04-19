import {StyleSheet,Dimensions} from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#222831",
    },
    mainContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    artworkScroll:{
        width: width,
        justifyContent:"center",
        alignItems:"center"
    },
    artworkWrapper: {
      width: 300,
      height: 340,
      marginBottom: 25,
      shadowColor: "#ccc",
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3.84,
    },
    artworkImage: {
      width: "100%",
      height: "100%",
      borderRadius: 15,
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      textAlign: "center",
      color: "#EEEEEE",
    },
    artist: {
      fontSize: 16,
      fontWeight: "200",
      textAlign: "center",
      color: "#EEEEEE",
    },
    progressContainer: {
      width: 350,
      height: 40,
      marginTop: 25,
      flexDirection: "row",
    },
    progressLabelContainer: {
      width: 340,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    progressLabelTxt: {
      color: "white",
    },
    musicControlls:{
      flexDirection:"row",
      width:'60%',
      justifyContent:"space-between",
      marginTop: 15
    },
    bottomContainer: {
      borderTopWidth: 1,
      borderTopColor: "white",
      width: width,
      alignItems: "center",
      paddingVertical: 15,
    },
    bottomControl: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "80%",
    },
  });
export default styles  