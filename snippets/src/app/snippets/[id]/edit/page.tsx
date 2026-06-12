import { notFound } from 'next/navigation'
import { db } from '@/db';
import SnippetEditForm from '@/components/snippet-edit-form';


interface SnippetEditPageProps {
    params: Promise<{
        id: string
    }>;
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
    const { id: idString } = await props.params;
    const id = parseInt(idString, 10);

    const snippet = await db.snippet.findFirst({
        where: { id },
    });

    if (!snippet) {
        return notFound();
    }    

    console.log(id);

    return (
        <div>
            <SnippetEditForm snippet={snippet}/>
        </div>
    );
}