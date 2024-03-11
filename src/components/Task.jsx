import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Theme from "../theme.js";

export default function Task(props) {
    return (
        <View key={props.id} style={styles.container}>
            <View>
                <Text style={[styles.text, styles.title]}>{props.title}</Text>
                <Text style={styles.text}>{props.description}</Text>
                <Text style={styles.text}>{props.due}</Text>
            </View>
            <Button
                opPress={greetings}
                title='Click Me'
                color={Theme.color.accent}
                accesibilityLabel='Click me accessibly'
            />
        </View>
    );
}

const greetings = () => {
    Alert.alert("hello world");
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    text: {
        color: Theme.color.foreground,
    },

    title: {
        fontWeight: Theme.fontWeight.bold,
        marginBottom: 5,
        color: Theme.color.accent,
    },
});
