import tasks from "../data/tasks";
import { FlatList, View, Text } from "react-native";
import Task from "./Task";

export default function TaskList() {
    return (
        <View>
            <FlatList
                data={tasks}
                ItemSeparatorComponent={() => <Text> --- </Text>}
                renderItem={({ item: task }) => <Task {...task} />}
            />
        </View>
    );
}
