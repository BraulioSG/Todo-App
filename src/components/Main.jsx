import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import TaskList from "./TaskList.jsx";
import Theme from "../theme.js";

export default function Main() {
    return (
        <View style={styles.main}>
            <TaskList />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        backgroundColor: Theme.color.background,
    },
});
