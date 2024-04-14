import React, {useState} from 'react';
import Box from "./Box";
import NormalContainer from "@/shared/NormalContainer";
import BoxSelect from "@/shared/BoxSelect";
import BoxSelectOption from "@/shared/BoxSelectOption";
import Button from "@/shared/Button";
import CardHeader from "@/shared/CardHeader";
import Card from "@/shared/Card";
import CardSubheader from "@/shared/CardSubheader";
import EmptyState from "@/shared/EmptyState";
import FormInput from "@/shared/FormInput";
import Form from "@/shared/Form";
import TextInput from "@/shared/TextInput";
import Table from "@/shared/Table";
import Thead from "@/shared/Thead";
import Tr from "@/shared/Tr";
import Th from "@/shared/Th";
import Tbody from "@/shared/Tbody";
import BottomSheet from "@/shared/BottomSheet";
import Error from "@/shared/Error";

function KitchenSink(props) {
    const [bottomSheet, setBottomSheet] = useState(false)
    return (
        <NormalContainer>
            <h1>
                Typography
            </h1>
            <Box>
                Test
            </Box>
            <BoxSelect>
                <BoxSelectOption>
                    Option 1
                </BoxSelectOption>
                <BoxSelectOption>
                    Option 2
                </BoxSelectOption>
            </BoxSelect>
            <Card>
                <CardHeader>
                    Header
                </CardHeader>
                <CardSubheader>
                    Subheader
                </CardSubheader>
            </Card>
            <EmptyState>
            </EmptyState>
            <Form>
                <FormInput>
                    <TextInput placeholder={'Placeholder...'}/>
                </FormInput>
            </Form>
            <Table>
                <Thead>
                    <Tr>
                        <Th>
                            Head 1
                        </Th>
                        <Th>
                            Head 2
                        </Th>

                    </Tr>

                </Thead>
                <Tbody>
                    <Tr>
                        <Th>
                            Body 1
                        </Th>
                        <Th>
                            Body 2
                        </Th>
                    </Tr>
                </Tbody>
            </Table>
            <Button onClick={() => setBottomSheet(true)}>
                Bottom Sheet
            </Button>
            <BottomSheet open={bottomSheet} onClose={() => setBottomSheet(false)} />
            <Error error={{ message: 'Test error' }} />
        </NormalContainer>
    );
}

export default KitchenSink;
