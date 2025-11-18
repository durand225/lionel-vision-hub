export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      ai_summaries: {
        Row: {
          child_name: string | null
          created_at: string
          date: string
          id: string
          summary: string
          user_id: string
        }
        Insert: {
          child_name?: string | null
          created_at?: string
          date: string
          id?: string
          summary: string
          user_id: string
        }
        Update: {
          child_name?: string | null
          created_at?: string
          date?: string
          id?: string
          summary?: string
          user_id?: string
        }
        Relationships: []
      }
      bio_submissions: {
        Row: {
          created_at: string
          generated_bio: string
          id: string
          interests: string | null
          name: string
          profession: string
          skills: string | null
          tone: string
        }
        Insert: {
          created_at?: string
          generated_bio: string
          id?: string
          interests?: string | null
          name: string
          profession: string
          skills?: string | null
          tone: string
        }
        Update: {
          created_at?: string
          generated_bio?: string
          id?: string
          interests?: string | null
          name?: string
          profession?: string
          skills?: string | null
          tone?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          author_name: string
          created_at: string
          id: string
          message: string
          post_id: string
          user_id: string
        }
        Insert: {
          author_name: string
          created_at?: string
          id?: string
          message: string
          post_id: string
          user_id: string
        }
        Update: {
          author_name?: string
          created_at?: string
          id?: string
          message?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      community_posts: {
        Row: {
          author_name: string
          created_at: string
          id: string
          location: string | null
          message: string
          post_type: Database["public"]["Enums"]["post_type"]
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          author_name: string
          created_at?: string
          id?: string
          location?: string | null
          message: string
          post_type: Database["public"]["Enums"]["post_type"]
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          author_name?: string
          created_at?: string
          id?: string
          location?: string | null
          message?: string
          post_type?: Database["public"]["Enums"]["post_type"]
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      documents: {
        Row: {
          ai_extracted_info: Json | null
          category: Database["public"]["Enums"]["document_category"]
          child_name: string | null
          created_at: string
          file_name: string
          file_url: string
          id: string
          notes: string | null
          reminder_date: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_extracted_info?: Json | null
          category: Database["public"]["Enums"]["document_category"]
          child_name?: string | null
          created_at?: string
          file_name: string
          file_url: string
          id?: string
          notes?: string | null
          reminder_date?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_extracted_info?: Json | null
          category?: Database["public"]["Enums"]["document_category"]
          child_name?: string | null
          created_at?: string
          file_name?: string
          file_url?: string
          id?: string
          notes?: string | null
          reminder_date?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          child_name: string | null
          created_at: string
          description: string | null
          end_date: string
          id: string
          is_recurring: boolean | null
          recurrence_pattern: string | null
          start_date: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          child_name?: string | null
          created_at?: string
          description?: string | null
          end_date: string
          id?: string
          is_recurring?: boolean | null
          recurrence_pattern?: string | null
          start_date: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          child_name?: string | null
          created_at?: string
          description?: string | null
          end_date?: string
          id?: string
          is_recurring?: boolean | null
          recurrence_pattern?: string | null
          start_date?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      family_info: {
        Row: {
          address: string | null
          children: Json
          created_at: string
          family_name: string
          id: string
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          children: Json
          created_at?: string
          family_name: string
          id?: string
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          children?: Json
          created_at?: string
          family_name?: string
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      homework: {
        Row: {
          ai_summary: string | null
          child_name: string
          completed: boolean | null
          created_at: string
          deadline: string | null
          extracted_text: string | null
          id: string
          photo_url: string
          subject: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_summary?: string | null
          child_name: string
          completed?: boolean | null
          created_at?: string
          deadline?: string | null
          extracted_text?: string | null
          id?: string
          photo_url: string
          subject?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_summary?: string | null
          child_name?: string
          completed?: boolean | null
          created_at?: string
          deadline?: string | null
          extracted_text?: string | null
          id?: string
          photo_url?: string
          subject?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      motivations: {
        Row: {
          created_at: string
          id: string
          message_ai: string
          niveau: string
          objectif: string
          prenom: string
          style: string
        }
        Insert: {
          created_at?: string
          id?: string
          message_ai: string
          niveau: string
          objectif: string
          prenom: string
          style: string
        }
        Update: {
          created_at?: string
          id?: string
          message_ai?: string
          niveau?: string
          objectif?: string
          prenom?: string
          style?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          metadata: Json | null
          reference: string
          status: string
          user_email: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          metadata?: Json | null
          reference: string
          status: string
          user_email: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          metadata?: Json | null
          reference?: string
          status?: string
          user_email?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          prenom: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          prenom: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          prenom?: string
          updated_at?: string
        }
        Relationships: []
      }
      submissions: {
        Row: {
          created_at: string
          id: string
          prompt: string
          response: string
        }
        Insert: {
          created_at?: string
          id?: string
          prompt: string
          response: string
        }
        Update: {
          created_at?: string
          id?: string
          prompt?: string
          response?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          child_name: string | null
          completed: boolean | null
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          priority: Database["public"]["Enums"]["task_priority"] | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          child_name?: string | null
          completed?: boolean | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: Database["public"]["Enums"]["task_priority"] | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          child_name?: string | null
          completed?: boolean | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: Database["public"]["Enums"]["task_priority"] | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      document_category:
        | "medical"
        | "school"
        | "administrative"
        | "legal"
        | "insurance"
        | "other"
      post_type:
        | "help"
        | "carpool"
        | "babysitting"
        | "exchange"
        | "advice"
        | "other"
      task_priority: "high" | "medium" | "low"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
      document_category: [
        "medical",
        "school",
        "administrative",
        "legal",
        "insurance",
        "other",
      ],
      post_type: [
        "help",
        "carpool",
        "babysitting",
        "exchange",
        "advice",
        "other",
      ],
      task_priority: ["high", "medium", "low"],
    },
  },
} as const
